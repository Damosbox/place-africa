"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import {
  CHAT_GREETING,
  WHATSAPP_DISPLAY,
  WHATSAPP_FALLBACK_MESSAGE,
  waLink,
} from "@/lib/content/contact";

/**
 * Chat textuel intégré à la page.
 *
 * La conversation vit dans la bulle : rien ne redirige vers WhatsApp. Les messages
 * partent vers /api/chat, qui relaie au moteur du chatbot.
 *
 * WhatsApp n'a pas disparu pour autant — il reste proposé en bas du panneau, pour
 * qui préfère continuer sur son téléphone. C'est une bascule volontaire, pas un
 * détour forcé.
 *
 * Note : il n'existe aucun moyen d'afficher une vraie conversation WhatsApp dans
 * une page web. Meta ne fournit pas de SDK navigateur pour ça, et son API serveur
 * n'envoie que depuis le numéro de l'entreprise vers un utilisateur connu. Ce chat
 * est donc un canal webchat distinct, servi par le même bot.
 */

type Message = {
  id: string;
  role: "user" | "bot";
  text: string;
  degraded?: boolean;
};

const STORAGE_KEY = "docaya-chat";

function newId(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [sessionId, setSessionId] = useState("");

  const panelRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  // Reprise de la conversation en cours — l'historique survit au changement de page
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as { sessionId: string; messages: Message[] };
        setSessionId(parsed.sessionId);
        setMessages(parsed.messages);
        return;
      }
    } catch {
      // sessionStorage indisponible (navigation privée, quota) — on repart à zéro
    }
    setSessionId(newId());
    setMessages([{ id: newId(), role: "bot", text: CHAT_GREETING }]);
  }, []);

  useEffect(() => {
    if (!sessionId || messages.length === 0) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ sessionId, messages }));
    } catch {
      // quota dépassé — la conversation reste en mémoire pour cette page
    }
  }, [sessionId, messages]);

  // Défilement vers le bas à chaque nouveau message
  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        fabRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || sending || !sessionId) return;

    setMessages((prev) => [...prev, { id: newId(), role: "user", text }]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, message: text }),
      });
      const data = (await res.json()) as { reply?: string; degraded?: boolean };

      setMessages((prev) => [
        ...prev,
        {
          id: newId(),
          role: "bot",
          text:
            data.reply ??
            "Une erreur est survenue. Réessayez, ou écrivez-nous sur WhatsApp.",
          degraded: data.degraded,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: newId(),
          role: "bot",
          text: "Connexion interrompue. Réessayez, ou écrivez-nous sur WhatsApp.",
          degraded: true,
        },
      ]);
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  }, [input, sending, sessionId]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Panneau de conversation */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Discuter avec Place Fuse"
          className="w-[min(23rem,calc(100vw-3rem))] rounded-2xl bg-white shadow-hover border border-neutral-200 overflow-hidden flex flex-col animate-[fadeUp_.18s_ease-out]"
          style={{ height: "min(30rem, calc(100vh - 8rem))" }}
        >
          {/* En-tête */}
          <div className="bg-neutral-900 px-5 py-4 flex items-start justify-between gap-3 shrink-0">
            <div>
              <p className="text-white font-bold text-sm leading-snug">Place Fuse</p>
              <p className="text-white/50 text-xs mt-0.5 leading-snug">
                Réponse immédiate · un conseiller prend le relais si besoin
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/50 hover:text-white shrink-0 -mr-1"
              aria-label="Fermer la conversation"
            >
              <X size={16} />
            </button>
          </div>

          {/* Fil de messages */}
          <div
            ref={logRef}
            role="log"
            aria-live="polite"
            aria-atomic="false"
            className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-neutral-50"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap break-words",
                  m.role === "user"
                    ? "self-end bg-neutral-900 text-white rounded-br-md"
                    : "self-start bg-white border border-neutral-200 text-neutral-700 rounded-bl-md"
                )}
              >
                {m.text}
                {m.degraded && (
                  <a
                    href={waLink(WHATSAPP_FALLBACK_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-whatsapp hover:underline"
                  >
                    Continuer sur WhatsApp →
                  </a>
                )}
              </div>
            ))}

            {sending && (
              <div className="self-start bg-white border border-neutral-200 rounded-2xl rounded-bl-md px-4 py-3">
                <span className="flex gap-1" aria-label="En train d'écrire">
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="w-1.5 h-1.5 rounded-full bg-neutral-400"
                      style={{ animation: `blink 1.2s ${delay}ms infinite` }}
                    />
                  ))}
                </span>
              </div>
            )}
          </div>

          {/* Saisie */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
            className="shrink-0 border-t border-neutral-200 p-2.5 flex items-center gap-2 bg-white"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={2000}
              placeholder="Écrivez votre message…"
              aria-label="Votre message"
              className="flex-1 min-w-0 px-3 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-900 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || sending}
              aria-label="Envoyer"
              className="shrink-0 w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center hover:bg-black disabled:opacity-30 disabled:pointer-events-none transition-all"
            >
              <Send size={16} />
            </button>
          </form>

          {/* Bascule WhatsApp — proposée, jamais imposée */}
          <a
            href={waLink(WHATSAPP_FALLBACK_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center justify-center gap-2 px-4 py-2.5 border-t border-neutral-100 text-xs text-neutral-500 hover:text-whatsapp hover:bg-neutral-50 transition-colors"
          >
            Vous préférez WhatsApp ? {WHATSAPP_DISPLAY}
          </a>
        </div>
      )}

      {/* Bulle d'accroche */}
      {!open && !bubbleDismissed && (
        <div className="bg-white rounded-2xl shadow-hover px-4 py-3 flex items-center gap-2 max-w-xs border border-neutral-200">
          <p className="text-sm text-neutral-700 font-medium">
            Une question ? Discutons.
          </p>
          <button
            onClick={() => setBubbleDismissed(true)}
            className="text-neutral-400 hover:text-neutral-600 ml-1"
            aria-label="Fermer"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Bouton flottant */}
      <button
        ref={fabRef}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Fermer la conversation" : "Discuter avec Place Fuse"}
        className={cn(
          "w-14 h-14 bg-neutral-900 rounded-full flex items-center justify-center shadow-cta text-white",
          "hover:scale-110 hover:bg-black transition-all duration-200 focus:outline-none",
          "focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
        )}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 60%, 100% { opacity: 0.25; }
          30%           { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
