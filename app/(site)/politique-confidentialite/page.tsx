import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Place Côte d'Ivoire — comment nous collectons et utilisons vos données sur place.africa et app.docaya.com.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container-site max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">Légal</p>
        <h1 className="text-4xl font-bold text-neutral-900 mb-2">Politique de confidentialité</h1>
        <p className="text-sm text-neutral-400 mb-10">Site place.africa — Accès applicatif app.docaya.com</p>

        <div className="space-y-10 text-neutral-700 leading-relaxed">

          <p>
            La présente Politique de confidentialité décrit la manière dont Place Côte d&apos;Ivoire collecte
            et traite les données à caractère personnel dans le cadre du site place.africa, des formulaires
            qui y sont proposés et, lorsque cela est pertinent, de l&apos;accès à l&apos;application Docaya à
            l&apos;adresse app.docaya.com.
          </p>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement est <strong>Place Côte d&apos;Ivoire</strong>, société [forme sociale
              à compléter], sise [adresse à compléter], joignable à [email de contact à compléter].
            </p>
            <p className="mt-2">
              Pour toute question relative à la protection des données personnelles :{" "}
              [email privacy à compléter].
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">2. Principes retenus</h2>
            <ul className="list-disc list-inside space-y-1.5 text-sm">
              <li>Collecte limitée aux données strictement nécessaires</li>
              <li>Finalités déterminées, explicites et légitimes</li>
              <li>Durées de conservation limitées et revues périodiquement</li>
              <li>Absence de vente ou de communication commerciale des données à des tiers</li>
              <li>Sécurisation des accès, des environnements et des journaux</li>
              <li>Information claire et possibilité d&apos;exercer les droits applicables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">3. Données collectées</h2>
            <p className="mb-4 text-sm">
              Place Côte d&apos;Ivoire retient une logique de minimisation. Le site n&apos;a pas vocation à
              collecter des données excessives ou sensibles.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700 border-b border-neutral-200">Contexte</th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700 border-b border-neutral-200">Données collectées</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Formulaire de contact</td>
                    <td className="px-4 py-3 text-neutral-600">nom, prénom, société, email professionnel, téléphone (facultatif), objet, message</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Demande de démo</td>
                    <td className="px-4 py-3 text-neutral-600">nom, prénom, société, fonction, email professionnel, téléphone, pays, besoin exprimé</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Communications marketing</td>
                    <td className="px-4 py-3 text-neutral-600">email, préférences de communication, preuve du consentement</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Navigation sur le site</td>
                    <td className="px-4 py-3 text-neutral-600">données techniques, journaux, choix de consentement, cookies strictement nécessaires et, si consentis, cookies analytiques</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">4. Finalités et bases de traitement</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700 border-b border-neutral-200">Finalité</th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700 border-b border-neutral-200">Base retenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Répondre aux demandes de contact</td>
                    <td className="px-4 py-3 text-neutral-600">Mesures précontractuelles ou intérêt légitime</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Organiser une démonstration</td>
                    <td className="px-4 py-3 text-neutral-600">Mesures précontractuelles</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Envoi d&apos;informations marketing</td>
                    <td className="px-4 py-3 text-neutral-600">Consentement (ou intérêt légitime en B2B selon le cas)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Sécurité du site</td>
                    <td className="px-4 py-3 text-neutral-600">Intérêt légitime et obligations de sécurité</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Gestion des préférences cookies</td>
                    <td className="px-4 py-3 text-neutral-600">Obligation de preuve et intérêt légitime</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Traitement des droits des personnes</td>
                    <td className="px-4 py-3 text-neutral-600">Obligation légale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">5. Destinataires des données</h2>
            <p>
              Les données collectées via le site sont destinées aux seules personnes habilitées au sein de
              Place Côte d&apos;Ivoire, dans la limite de leurs attributions : équipes marketing, commerciales,
              administratives, support ou conformité selon le besoin.
            </p>
            <p className="mt-2">
              Place Côte d&apos;Ivoire <strong>ne vend pas les données</strong> et ne les communique pas à des
              partenaires commerciaux tiers. Les prestataires techniques strictement nécessaires à
              l&apos;exploitation (hébergement, emails transactionnels) sont mentionnés dans la version publiée
              de la présente politique.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">6. Durées de conservation</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700 border-b border-neutral-200">Catégorie</th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700 border-b border-neutral-200">Durée opérationnelle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Demandes de contact sans suite</td>
                    <td className="px-4 py-3 text-neutral-600">12 mois maximum après le dernier échange utile</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Demandes de démo et prospects non clients</td>
                    <td className="px-4 py-3 text-neutral-600">24 mois maximum après le dernier contact actif</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Communications marketing</td>
                    <td className="px-4 py-3 text-neutral-600">Jusqu&apos;au retrait du consentement, à l&apos;opposition ou à l&apos;inactivité prolongée</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Preuve de consentement cookies</td>
                    <td className="px-4 py-3 text-neutral-600">Durée strictement nécessaire à la preuve de conformité</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Journaux de sécurité</td>
                    <td className="px-4 py-3 text-neutral-600">Durée courte et proportionnée aux besoins d&apos;exploitation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">7. Sécurité</h2>
            <p>
              Place Côte d&apos;Ivoire met en œuvre des mesures techniques et organisationnelles raisonnables :
              contrôle des accès, gestion des habilitations, mots de passe robustes, journalisation, sauvegardes,
              cloisonnement des environnements et limitation des extractions de données.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">8. Vos droits</h2>
            <p>
              Sous réserve du droit applicable, toute personne concernée peut demander l&apos;accès à ses données,
              leur rectification, la limitation ou l&apos;effacement lorsque cela est justifié, s&apos;opposer à
              certains traitements et retirer son consentement.
            </p>
            <p className="mt-2">
              Les demandes peuvent être adressées à{" "}
              <a href="mailto:privacy@place.africa" className="text-brand-accent hover:underline">
                privacy@place.africa
              </a>. Une réponse motivée est apportée dans un délai raisonnable.
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              Vous pouvez également saisir l&apos;Autorité de Régulation des Télécommunications/TIC de Côte
              d&apos;Ivoire (ARTCI).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">9. Cookies</h2>
            <p>
              La gestion des cookies et autres traceurs fait l&apos;objet d&apos;une{" "}
              <Link href="/politique-cookies" className="text-brand-accent hover:underline">
                politique distincte
              </Link>. Les traceurs non strictement nécessaires ne sont pas déposés avant le recueil d&apos;un
              choix valable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">10. Mise à jour</h2>
            <p>
              La présente politique peut être modifiée à tout moment afin de tenir compte des évolutions
              légales, techniques ou organisationnelles. La date de mise à jour apparaît clairement sur cette
              page. En cas de modification substantielle, Place Côte d&apos;Ivoire mettra à jour l&apos;information
              affichée sur le site.
            </p>
            <p className="mt-3 text-sm text-neutral-400">Dernière mise à jour : avril 2025</p>
          </section>

        </div>

        <div className="mt-14 pt-8 border-t border-neutral-200 flex flex-wrap gap-6 text-sm text-neutral-400">
          <Link href="/mentions-legales" className="hover:text-neutral-700 transition-colors">
            Mentions légales
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
