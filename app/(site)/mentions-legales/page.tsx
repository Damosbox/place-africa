import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site place.africa, édité par Place Côte d'Ivoire, éditeur du produit Docaya.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container-site max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">Légal</p>
        <h1 className="text-4xl font-bold text-neutral-900 mb-2">Mentions légales</h1>
        <p className="text-sm text-neutral-400 mb-10">Site place.africa — Accès applicatif app.docaya.com</p>

        <div className="prose prose-neutral max-w-none space-y-10 text-neutral-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">1. Éditeur du site</h2>
            <p>
              Le site internet accessible à l&apos;adresse <strong>place.africa</strong> est édité par{" "}
              <strong>Place Côte d&apos;Ivoire</strong>, société [forme sociale à compléter], au capital de
              [à compléter], immatriculée au RCCM sous le numéro [à compléter], dont le siège social est
              situé [adresse complète à compléter].
            </p>
            <p className="mt-2">
              Adresse électronique de contact :{" "}
              <a href="mailto:info@place.africa" className="text-brand-accent hover:underline">
                info@place.africa
              </a>.<br />
              Téléphone : +225 58 57 50 017.
            </p>
            <p className="mt-2">
              Place Côte d&apos;Ivoire exploite notamment, pour ses activités, les dénominations et marques{" "}
              Place Africa, Place, Place Fuse, Place Business, Place POS, Place Pay et Docaya, sous réserve
              des titres, dépôts et droits effectivement détenus ou exploités par la société.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">2. Publication et responsabilité éditoriale</h2>
            <p>
              Le directeur de la publication du site est <strong>Saint-Clair BOTI</strong>.
              Toute question relative au contenu éditorial peut être adressée à{" "}
              <a href="mailto:info@place.africa" className="text-brand-accent hover:underline">
                info@place.africa
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">3. Hébergement et exploitation technique</h2>
            <p>
              Le site est hébergé par [hébergeur à compléter], dont le siège est situé [adresse à compléter].
            </p>
            <p className="mt-2">
              L&apos;accès applicatif au produit Docaya est disponible à l&apos;adresse{" "}
              <a href="https://app.docaya.com" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
                app.docaya.com
              </a>. L&apos;hébergement de l&apos;application, de la base de données et des composants techniques
              associés est décrit dans la{" "}
              <Link href="/politique-confidentialite" className="text-brand-accent hover:underline">
                Politique de confidentialité
              </Link>.
            </p>
            <p className="mt-2">
              Place Côte d&apos;Ivoire utilise Odoo v18 Entreprise pour certains traitements d&apos;exploitation,
              de gestion commerciale ou d&apos;administration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">4. Objet du site</h2>
            <p>
              Le site place.africa a pour objet de présenter les activités, produits, services et offres de
              Place Côte d&apos;Ivoire, notamment le produit Docaya, et de permettre la prise de contact, la
              demande de démonstration ou, le cas échéant, l&apos;accès à certains espaces applicatifs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">5. Conditions d&apos;accès et disponibilité</h2>
            <p>
              Place Côte d&apos;Ivoire s&apos;efforce d&apos;assurer l&apos;accès au site dans des conditions raisonnables
              de disponibilité et de sécurité. Toutefois, la société ne garantit pas une disponibilité
              ininterrompue du site et peut suspendre, limiter ou interrompre temporairement l&apos;accès pour
              des raisons de maintenance, de sécurité, de mise à jour ou d&apos;exploitation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">6. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des éléments présents sur le site — textes, images, graphismes, logos, icônes,
              vidéos, logiciels, bases de données, dénominations, marques et signes distinctifs — sont protégés
              par les règles applicables de propriété intellectuelle et demeurent, sauf mention contraire, la
              propriété de Place Côte d&apos;Ivoire ou de leurs titulaires respectifs.
            </p>
            <p className="mt-2">
              Toute reproduction, représentation, extraction, adaptation, diffusion ou exploitation, totale ou
              partielle, sans autorisation écrite préalable, est interdite, sauf dans les cas expressément
              autorisés par la loi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">7. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. Place Côte d&apos;Ivoire n&apos;exerce pas de
              contrôle général sur ces sites et n&apos;assume aucune responsabilité sur leur contenu, leur
              disponibilité, leur politique de confidentialité ou leur conformité.
            </p>
            <p className="mt-2">
              La création de liens vers le site place.africa est tolérée sous réserve qu&apos;elle n&apos;altère ni
              ne dénature le site, ses contenus, ses marques ou son image.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">8. Responsabilité</h2>
            <p>
              Les informations publiées sur le site sont fournies à titre informatif. Place Côte d&apos;Ivoire
              s&apos;efforce d&apos;en assurer l&apos;exactitude et la mise à jour, sans garantir l&apos;absence totale
              d&apos;erreurs, d&apos;omissions ou d&apos;indisponibilités.
            </p>
            <p className="mt-2">
              Place Côte d&apos;Ivoire ne saurait être tenue responsable des dommages directs ou indirects
              résultant de l&apos;utilisation du site, sauf faute démontrée lui étant directement imputable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">9. Données personnelles et traceurs</h2>
            <p>
              Les traitements de données à caractère personnel mis en œuvre via le site et, le cas échéant,
              via les formulaires ou l&apos;accès applicatif lié à Docaya, sont décrits dans la{" "}
              <Link href="/politique-confidentialite" className="text-brand-accent hover:underline">
                Politique de confidentialité
              </Link>. Les règles applicables aux cookies et autres traceurs sont décrites dans la{" "}
              <Link href="/politique-cookies" className="text-brand-accent hover:underline">
                Politique cookies
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">10. Droit applicable et réclamations</h2>
            <p>
              Les présentes mentions légales sont régies par le droit ivoirien, sous réserve des règles
              impératives éventuellement applicables dans d&apos;autres ressorts lorsque la loi l&apos;exige.
            </p>
            <p className="mt-2">
              Toute question ou réclamation relative au site peut être adressée à{" "}
              <a href="mailto:info@place.africa" className="text-brand-accent hover:underline">
                info@place.africa
              </a>. En
              matière de données personnelles, l&apos;utilisateur peut également saisir l&apos;Autorité de Régulation
              des Télécommunications/TIC de Côte d&apos;Ivoire (ARTCI).
            </p>
          </section>

        </div>

        <div className="mt-14 pt-8 border-t border-neutral-200 flex flex-wrap gap-6 text-sm text-neutral-400">
          <Link href="/politique-confidentialite" className="hover:text-neutral-700 transition-colors">
            Politique de confidentialité
          </Link>
          <Link href="/politique-cookies" className="hover:text-neutral-700 transition-colors">
            Politique cookies
          </Link>
          <Link href="/contact" className="hover:text-neutral-700 transition-colors">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
