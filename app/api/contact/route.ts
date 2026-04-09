import { NextResponse } from "next/server";
import { z } from "zod";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  sector: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const data = contactSchema.parse(body);

    // Log to console (fallback when no SMTP is configured)
    console.log("[Contact Form]", JSON.stringify(data, null, 2));

    // Send email via nodemailer if SMTP is configured
    if (process.env.SMTP_HOST) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Docaya Site" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL ?? "contact@docaya.com",
        replyTo: data.email,
        subject: `[Docaya] Nouvelle demande de démo — ${data.company}`,
        html: `
          <h2>Nouvelle demande de démo</h2>
          <table>
            <tr><td><strong>Nom</strong></td><td>${escapeHtml(data.name)}</td></tr>
            <tr><td><strong>Entreprise</strong></td><td>${escapeHtml(data.company)}</td></tr>
            <tr><td><strong>Email</strong></td><td>${escapeHtml(data.email)}</td></tr>
            <tr><td><strong>Téléphone</strong></td><td>${data.phone ? escapeHtml(data.phone) : "—"}</td></tr>
            <tr><td><strong>Secteur</strong></td><td>${escapeHtml(data.sector)}</td></tr>
          </table>
          <h3>Message</h3>
          <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
        `,
        text: `
Nouvelle demande de démo

Nom: ${data.name}
Entreprise: ${data.company}
Email: ${data.email}
Téléphone: ${data.phone ?? "—"}
Secteur: ${data.sector}

Message:
${data.message}
        `.trim(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: err.errors },
        { status: 400 }
      );
    }
    console.error("[Contact API Error]", err);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
