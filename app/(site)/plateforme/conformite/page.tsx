import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MessagesSquare,
  ShieldCheck,
  FolderLock,
  SlidersHorizontal,
} from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { RolesTable } from "@/components/sections/sectors/RolesTable";
import { genericRoles, genericRolesIntro, placeServices } from "@/lib/content/place-fuse";

/**
 * Vérification d'identité et conformité — §3.
 *
 * Cette page ne détaille volontairement PAS le catalogue des contrôles techniques.
 * Exposer la liste complète invite l'acheteur à comparer avec une solution
 * spécialisée achetée en direct — et déplace la discussion sur le prix unitaire.
 * Ce qu'on vend ici, c'est l'intégration : la vérification se fait dans le
 * parcours, pas à côté.
 *
 * Revue du 21/10/2026 : la carte « plus fiable qu'un contrôle visuel / documents
 * falsifiés détectés » a été remplacée par les contrôles que décrivent les
 * supports d'octobre (OTP, preuve de vie, cohérence, listes de sanctions et de
 * personnes politiquement exposées). Le tableau « Qui fait quoi » reprend la
 * synthèse, diapositive 18. ⚠️ Formulations à confirmer par l'équipe technique.
 */

export const metadata: Metadata = {
  title: "Vérification d'identité et conformité",
  description:
    "Ouvrir un compte, enrôler un affilié, souscrire un contrat : la vérification d'identité se fait dans la conversation, sans déplacement, et la preuve reste attachée au dossier.",
};

const changes = [
  {
    icon: <MessagesSquare size={22} />,
    title: "La vérification se passe dans la conversation",
    body: "Le client photographie sa pièce d'identité, son visage est comparé au document, sa présence réelle confirmée. Il ne quitte jamais la discussion, ne télécharge rien, ne se déplace pas.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Les contrôles se font au fil du parcours",
    body: "Place Fuse collecte les pièces, vérifie le numéro par code OTP, contrôle la preuve de vie, la cohérence des informations et les listes de sanctions et de personnes politiquement exposées. En cas de correspondance, il alerte votre service conformité : la décision reste la vôtre.",
  },
  {
    icon: <FolderLock size={22} />,
    title: "Le résultat est archivé avec le dossier",
    body: "Pas dans un outil séparé, pas dans un fichier à retrouver : le contrôle et sa preuve sont attachés au dossier du client, horodatés, prêts pour un contrôle du régulateur.",
  },
];

export default function ConformitePage() {
  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-16">
        <div className="container-site">
          <Link
            href="/plateforme"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            Plateforme
          </Link>
          <SectionTag className="mb-4 bg-white/10 text-white">
            Vérification d&apos;identité & conformité
          </SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 max-w-3xl">
            Vérifier une identité sans faire déplacer personne
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Ouvrir un compte, enrôler un affilié, souscrire un contrat : toutes ces
            démarches supposent de savoir qui est en face. Aujourd&apos;hui, ça veut
            dire un déplacement, une photocopie et un agent qui contrôle à l&apos;œil.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-10 max-w-2xl">
            Ce qui change avec Place Fuse
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {changes.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl border border-neutral-200 p-7 hover:shadow-card transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-subtle text-brand flex items-center justify-center mb-5">
                  {c.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-neutral-500 max-w-3xl">
            Service PLACE mobilisé : <span className="font-semibold text-neutral-800">Compliance</span>{" "}
            — {placeServices.Compliance.detail.toLowerCase()}.
          </p>

          <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 px-7 py-6">
            <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl">
              Pour les métiers réglementés, les contrôles obligatoires de lutte
              contre le blanchiment s&apos;intègrent au même parcours,{" "}
              <span className="text-neutral-900 font-semibold">
                sans étape supplémentaire pour le client.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white border-t border-neutral-100">
        <div className="container-site">
          <SectionTag className="mb-4">Qui fait quoi</SectionTag>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
            Votre organisation garde la décision
          </h2>
          <p className="text-neutral-600 mb-8 max-w-3xl">{genericRolesIntro}</p>
          <RolesTable roles={genericRoles} />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-start max-w-4xl">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
              <SlidersHorizontal size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Vous activez ce dont votre métier a besoin
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Une école n&apos;a pas les mêmes obligations qu&apos;une banque. Le
                niveau de contrôle se règle selon votre secteur et votre exposition
                au risque — et peut évoluer sans refaire le parcours.
              </p>
              <Link href="/contact?sujet=autre">
                <Button variant="primary" size="lg">
                  Discuter de vos obligations avec un expert
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
