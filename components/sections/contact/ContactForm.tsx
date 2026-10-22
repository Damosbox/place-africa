"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import { contactTopics, resolveTopic, type ContactTopic } from "@/lib/content/contact-topics";

const OTHER_SECTOR = "Autre";

const contactSchema = z.object({
  topic: z.enum(Object.keys(contactTopics) as [ContactTopic, ...ContactTopic[]]),
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  company: z.string().min(1, "Le nom de l'entreprise est requis"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  sector: z.string().min(1, "Veuillez sélectionner votre secteur"),
  journey: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export interface SectorOption {
  slug: string;
  title: string;
}

export interface JourneyOption {
  id: string;
  sector: string;
  title: string;
}

interface ContactFormProps {
  sectorOptions: SectorOption[];
  journeyOptions: JourneyOption[];
}

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}

function Field({ label, htmlFor, error, required, hint, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-neutral-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-neutral-500">{hint}</p>}
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}

const inputClass = cn(
  "w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 text-sm bg-white",
  "focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand",
  "placeholder:text-neutral-400 transition-colors"
);

/**
 * Formulaire de contact. Les CTA du site le préremplissent :
 * `?sujet=demo|pilote|tarifs`, `?secteur=<slug>`, `?parcours=<id>`.
 */
export function ContactForm(props: ContactFormProps) {
  // `useSearchParams` impose une frontière Suspense sur une page statique ; le
  // repli est le même formulaire, sans préremplissage.
  return (
    <Suspense fallback={<ContactFormBody {...props} />}>
      <ContactFormFromQuery {...props} />
    </Suspense>
  );
}

function ContactFormFromQuery(props: ContactFormProps) {
  const params = useSearchParams();
  const journey = props.journeyOptions.find((j) => j.id === params.get("parcours"));
  const sectorSlug = journey?.sector ?? params.get("secteur");
  const sector = props.sectorOptions.find((s) => s.slug === sectorSlug);

  return (
    <ContactFormBody
      {...props}
      initialTopic={resolveTopic(params.get("sujet"))}
      initialSector={sector?.title}
      initialJourney={journey?.title}
    />
  );
}

function ContactFormBody({
  sectorOptions,
  journeyOptions,
  initialTopic = "demo",
  initialSector,
  initialJourney,
}: ContactFormProps & {
  initialTopic?: ContactTopic;
  initialSector?: string;
  initialJourney?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      topic: initialTopic,
      sector: initialSector ?? "",
      journey: initialJourney ?? "",
      message: initialJourney
        ? `Je souhaite voir le parcours « ${initialJourney} » en démonstration.`
        : "",
    },
  });

  const selectedSector = watch("sector");
  const sectorSlug = sectorOptions.find((s) => s.title === selectedSector)?.slug;
  const sectorJourneys = journeyOptions.filter((j) => j.sector === sectorSlug);

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
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4" role="status">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900">Message envoyé</h3>
        <p className="text-neutral-600 max-w-sm">
          Merci pour votre demande. Notre équipe vous recontacte sous 24h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <Field label="Objet de votre demande" htmlFor="topic" error={errors.topic?.message} required>
        <select id="topic" {...register("topic")} className={inputClass}>
          {(Object.keys(contactTopics) as ContactTopic[]).map((t) => (
            <option key={t} value={t}>
              {contactTopics[t]}
            </option>
          ))}
        </select>
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Nom complet" htmlFor="name" error={errors.name?.message} required>
          <input id="name" {...register("name")} placeholder="Jean Kouassi" autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Organisation" htmlFor="company" error={errors.company?.message} required>
          <input
            id="company"
            {...register("company")}
            placeholder="Votre organisation"
            autoComplete="organization"
            className={inputClass}
          />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email professionnel" htmlFor="email" error={errors.email?.message} required>
          <input
            id="email"
            {...register("email")}
            type="email"
            placeholder="jean@organisation.ci"
            autoComplete="email"
            className={inputClass}
          />
        </Field>
        <Field label="Téléphone / WhatsApp" htmlFor="phone" error={errors.phone?.message}>
          <input
            id="phone"
            {...register("phone")}
            type="tel"
            placeholder="+225 07 00 00 00 00"
            autoComplete="tel"
            className={inputClass}
          />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Secteur d'activité" htmlFor="sector" error={errors.sector?.message} required>
          <select
            id="sector"
            {...register("sector", {
              onChange: () => setValue("journey", ""),
            })}
            className={inputClass}
          >
            <option value="">Sélectionnez votre secteur</option>
            {sectorOptions.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value={OTHER_SECTOR}>{OTHER_SECTOR}</option>
          </select>
        </Field>
        <Field
          label="Parcours qui vous intéresse"
          htmlFor="journey"
          hint={sectorJourneys.length === 0 ? "Choisissez d'abord un secteur." : undefined}
        >
          <select
            id="journey"
            {...register("journey")}
            className={inputClass}
            disabled={sectorJourneys.length === 0}
          >
            <option value="">Pas encore défini</option>
            {sectorJourneys.map((j) => (
              <option key={j.id} value={j.title}>
                {j.title}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Votre message" htmlFor="message" error={errors.message?.message} required>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          placeholder="Décrivez votre besoin : le processus concerné, vos volumes, vos outils actuels…"
          className={cn(inputClass, "resize-none")}
        />
      </Field>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700" role="alert">
          {error}
        </div>
      )}
      <p className="text-xs text-neutral-400 leading-relaxed">
        Les données demandées nous permettent de répondre à votre demande et de vous recontacter.
        Elles sont destinées aux équipes habilitées de Place Côte d&apos;Ivoire.
        Pour exercer vos droits :{" "}
        <a href="mailto:privacy@place.africa" className="underline hover:text-neutral-600 transition-colors">
          privacy@place.africa
        </a>
        .{" "}
        <a href="/politique-confidentialite" className="underline hover:text-neutral-600 transition-colors">
          Politique de confidentialité
        </a>
        .
      </p>
      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
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
