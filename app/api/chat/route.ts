import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Proxy vers le moteur du chatbot.
 *
 * Le navigateur ne parle jamais au moteur directement : il passe par ici. C'est ce
 * qui permet de garder la clé d'API côté serveur — une clé exposée dans le bundle
 * client est une clé publique, quel que soit l'effort d'obfuscation.
 *
 * Contrat attendu du moteur (à respecter côté équipe bot) :
 *   POST  CHAT_API_URL
 *   body  { sessionId: string, message: string }
 *   → 200 { reply: string }        (ou { message } / { text } / { answer }, tous acceptés)
 *
 * Variables d'environnement :
 *   CHAT_API_URL  — obligatoire pour activer le chat. Absente = mode repli.
 *   CHAT_API_KEY  — optionnelle, envoyée en `Authorization: Bearer …`.
 */

const chatSchema = z.object({
  sessionId: z.string().min(8).max(64),
  message: z.string().min(1).max(2000),
});

/** Repli affiché tant que le moteur n'est pas branché, ou s'il est injoignable. */
const FALLBACK_REPLY =
  "Je ne peux pas répondre dans cette fenêtre pour le moment. Écrivez-nous sur WhatsApp au +225 05 03 73 21 21, ou laissez vos coordonnées via le formulaire de contact — un conseiller vous répond sous 24 h ouvrées.";

const REQUEST_TIMEOUT_MS = 20_000;

/**
 * Limitation de débit en mémoire.
 *
 * ⚠️ Portée : une seule instance serverless. Sur Vercel, plusieurs instances
 * tournent en parallèle et ne partagent pas cette Map — la limite réelle est donc
 * plus haute que la valeur ci-dessous. C'est un garde-fou contre le script naïf,
 * pas contre une attaque distribuée. Pour une vraie limite, passer par un store
 * partagé (Upstash, Redis) ou le rate limiting de la plateforme.
 */
const RATE_LIMIT = { windowMs: 60_000, max: 20 };
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT.windowMs });
    // Purge opportuniste — évite que la Map grossisse indéfiniment
    if (hits.size > 5000) {
      const stale: string[] = [];
      hits.forEach((value, key) => {
        if (now > value.resetAt) stale.push(key);
      });
      stale.forEach((key) => hits.delete(key));
    }
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT.max;
}

/** Le moteur peut nommer son champ de réponse de plusieurs façons — on les accepte toutes. */
function extractReply(payload: unknown): string | null {
  if (typeof payload === "string") return payload.trim() || null;
  if (!payload || typeof payload !== "object") return null;

  const obj = payload as Record<string, unknown>;
  for (const key of ["reply", "message", "text", "answer", "response"]) {
    const value = obj[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return null;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      {
        reply:
          "Vous avez envoyé beaucoup de messages d'un coup. Patientez une minute, ou écrivez-nous sur WhatsApp au +225 05 03 73 21 21.",
        degraded: true,
      },
      { status: 429 }
    );
  }

  let data: z.infer<typeof chatSchema>;
  try {
    data = chatSchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  const endpoint = process.env.CHAT_API_URL;

  // Moteur pas encore branché : on le dit franchement plutôt que de simuler une réponse.
  if (!endpoint) {
    return NextResponse.json({ reply: FALLBACK_REPLY, degraded: true });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CHAT_API_KEY
          ? { Authorization: `Bearer ${process.env.CHAT_API_KEY}` }
          : {}),
      },
      body: JSON.stringify({ sessionId: data.sessionId, message: data.message }),
      signal: controller.signal,
    });

    if (!upstream.ok) {
      console.error("[Chat API] moteur en erreur", upstream.status);
      return NextResponse.json({ reply: FALLBACK_REPLY, degraded: true });
    }

    const reply = extractReply(await upstream.json());
    if (!reply) {
      console.error("[Chat API] réponse du moteur illisible");
      return NextResponse.json({ reply: FALLBACK_REPLY, degraded: true });
    }

    return NextResponse.json({ reply });
  } catch (err) {
    const aborted = err instanceof Error && err.name === "AbortError";
    console.error("[Chat API]", aborted ? "délai dépassé" : err);
    return NextResponse.json({ reply: FALLBACK_REPLY, degraded: true });
  } finally {
    clearTimeout(timeout);
  }
}
