"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  company: z.string().min(1, "Le nom de l'entreprise est requis"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  sector: z.string().min(1, "Veuillez sélectionner votre secteur"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const sectors = [
  "Assurances",
  "Immobilier",
  "Éducation",
  "Banques & Fintech",
  "Hôtellerie",
  "Transport Aérien",
  "Utilities",
  "Retail & Distribution",
  "Autre",
];

interface FieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, error, required, children }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}

const inputClass = cn(
  "w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 text-sm",
  "focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand",
  "placeholder:text-neutral-400 transition-colors"
);

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erreur lors de l'envoi");
      setSubmitted(true);
    } catch {
      setError("Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900">
          Message envoyé !
        </h3>
        <p className="text-neutral-600 max-w-sm">
          Merci pour votre demande. Notre équipe vous recontacte sous 24h pour
          organiser votre démo personnalisée.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Nom complet" error={errors.name?.message} required>
          <input
            {...register("name")}
            placeholder="Jean Kouassi"
            className={inputClass}
          />
        </Field>
        <Field label="Entreprise" error={errors.company?.message} required>
          <input
            {...register("company")}
            placeholder="Votre entreprise"
            className={inputClass}
          />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email professionnel" error={errors.email?.message} required>
          <input
            {...register("email")}
            type="email"
            placeholder="jean@entreprise.com"
            className={inputClass}
          />
        </Field>
        <Field label="Téléphone / WhatsApp" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+225 07 00 00 00 00"
            className={inputClass}
          />
        </Field>
      </div>
      <Field label="Secteur d'activité" error={errors.sector?.message} required>
        <select {...register("sector")} className={inputClass}>
          <option value="">Sélectionnez votre secteur</option>
          {sectors.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>
      <Field label="Votre message" error={errors.message?.message} required>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Décrivez votre besoin, votre nombre de clients, votre secteur..."
          className={cn(inputClass, "resize-none")}
        />
      </Field>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          {error}
        </div>
      )}
      <p className="text-xs text-neutral-400 leading-relaxed">
        Les données demandées nous permettent d&apos;organiser une démonstration de Docaya et de vous recontacter
        dans le cadre de votre demande. Elles sont destinées aux équipes habilitées de Place Côte d&apos;Ivoire.{" "}
        <a href="/politique-confidentialite" className="underline hover:text-neutral-600 transition-colors">
          Politique de confidentialité
        </a>.
      </p>
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={submitting}
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer ma demande
            <Send size={18} />
          </>
        )}
      </Button>
    </form>
  );
}
