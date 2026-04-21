import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique cookies",
  description:
    "Politique cookies et centre de préférences du site place.africa — comment nous utilisons les traceurs et comment gérer vos choix.",
};

export default function PolitiqueCookiesPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container-site max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">Légal</p>
        <h1 className="text-4xl font-bold text-neutral-900 mb-2">Politique cookies</h1>
        <p className="text-sm text-neutral-400 mb-10">Site place.africa — Centre de préférences</p>

        <div className="space-y-10 text-neutral-700 leading-relaxed">

          <p>
            La présente politique décrit l&apos;utilisation des cookies et autres traceurs sur le site
            place.africa, ainsi que les modalités de gestion des choix de l&apos;utilisateur.
          </p>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">1. Principes</h2>
            <ul className="list-disc list-inside space-y-1.5 text-sm">
              <li>Aucun traceur non strictement nécessaire n&apos;est déposé avant votre choix</li>
              <li>Le bouton &laquo; Tout refuser &raquo; est aussi accessible que &laquo; Tout accepter &raquo;</li>
              <li>Vous pouvez paramétrer vos choix par catégorie</li>
              <li>Un lien permanent &laquo; Gérer mes préférences &raquo; est accessible depuis le bas de page</li>
              <li>Une preuve de votre choix est conservée de manière sécurisée</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">2. Catégories de traceurs</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700 border-b border-neutral-200">Catégorie</th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700 border-b border-neutral-200">Rôle</th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700 border-b border-neutral-200">Consentement requis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Strictement nécessaires</td>
                    <td className="px-4 py-3 text-neutral-600">Fonctionnement technique du site, sécurité, mémorisation de la session ou du choix privacy</td>
                    <td className="px-4 py-3 text-neutral-600">Non, lorsqu&apos;ils sont réellement indispensables</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Mesure d&apos;audience</td>
                    <td className="px-4 py-3 text-neutral-600">Statistiques de fréquentation et amélioration du site</td>
                    <td className="px-4 py-3 text-neutral-600">Oui, sauf cas d&apos;exemption strictement applicable</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Personnalisation</td>
                    <td className="px-4 py-3 text-neutral-600">Adaptation de certains contenus ou préférences utilisateur</td>
                    <td className="px-4 py-3 text-neutral-600">Oui</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Marketing / réseaux sociaux</td>
                    <td className="px-4 py-3 text-neutral-600">Mesure de campagnes, pixels, retargeting, intégrations Meta</td>
                    <td className="px-4 py-3 text-neutral-600">Oui</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">3. Ce que nous vous proposons</h2>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 text-sm">
              <p className="font-medium text-neutral-800 mb-2">Exemple de formulation du bandeau :</p>
              <p className="text-neutral-600 italic">
                Nous utilisons des traceurs strictement nécessaires au fonctionnement du site. Avec votre
                accord, nous pouvons également utiliser des traceurs de mesure d&apos;audience et, le cas
                échéant, de marketing. Vous pouvez accepter, refuser ou personnaliser vos choix à tout moment.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">4. Centre de préférences</h2>
            <p>
              Vous pouvez modifier vos choix à tout moment, par catégorie, en cliquant sur le lien
              &laquo; Gérer mes préférences &raquo; en bas de page.
            </p>
            <p className="mt-2 text-sm">
              Les cases de consentement ne sont jamais pré-cochées. Le refus est aussi simple que
              l&apos;acceptation. Aucune formulation ambiguë n&apos;est utilisée.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">5. Inventaire des traceurs</h2>
            <p className="text-sm mb-4">
              L&apos;inventaire ci-dessous recense les traceurs effectivement utilisés sur le site.
              Il est mis à jour à chaque ajout ou suppression d&apos;outil.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700 border-b border-neutral-200">Traceur / outil</th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700 border-b border-neutral-200">Finalité</th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700 border-b border-neutral-200">Durée</th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700 border-b border-neutral-200">Catégorie</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 text-neutral-400 italic">[à compléter avant publication]</td>
                    <td className="px-4 py-3 text-neutral-400 italic">—</td>
                    <td className="px-4 py-3 text-neutral-400 italic">—</td>
                    <td className="px-4 py-3 text-neutral-400 italic">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-neutral-400">
              Cet inventaire doit être complété avec les traceurs réels du site (Odoo, outils analytiques,
              pixels sociaux, scripts marketing) avant publication.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">6. Conservation de la preuve</h2>
            <p>
              La preuve de votre choix est conservée de manière séparée et sécurisée, avec au minimum
              l&apos;identifiant de consentement, la date et l&apos;heure, la version du bandeau présenté et
              le choix exprimé. Cette preuve n&apos;est pas utilisée à des fins marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">7. Paramétrage de votre navigateur</h2>
            <p>
              Vous pouvez configurer votre navigateur pour limiter ou supprimer certains cookies. Toutefois,
              le paramétrage du navigateur ne remplace pas le mécanisme de gestion des préférences proposé
              par le site pour les traceurs soumis au consentement.
            </p>
          </section>

        </div>

        <div className="mt-14 pt-8 border-t border-neutral-200 flex flex-wrap gap-6 text-sm text-neutral-400">
          <Link href="/mentions-legales" className="hover:text-neutral-700 transition-colors">
            Mentions légales
          </Link>
          <Link href="/politique-confidentialite" className="hover:text-neutral-700 transition-colors">
            Politique de confidentialité
          </Link>
          <Link href="/contact" className="hover:text-neutral-700 transition-colors">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
