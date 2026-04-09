# Docaya — Contenu consolidé pour site vitrine

> Source : 3 documents internes (présentation plateforme 2025, technologies clés, catalogue d'offres v2.0 mars 2026)
> Dernière mise à jour : 2026-04-09

---

## 1. Identité & Positionnement

**Nom :** Docaya
**Baseline :** *Des conversations impactantes pour vos clients*
**Type :** Plateforme conversationnelle B2B
**Canal principal :** WhatsApp Business API (taux d'ouverture >90%)
**Canaux secondaires :** Messenger, Instagram, SMS, Email
**Site :** www.docaya.com | app.docaya.com
**Contact :** contact@docaya.com — Tél/WhatsApp : +2250701795666

**Proposition de valeur :** Docaya permet aux entreprises d'automatiser leurs interactions clients et leurs processus métiers via WhatsApp et d'autres canaux conversationnels. Architecture modulaire — seule la configuration change d'un secteur à l'autre, pas la technologie.

---

## 2. Stack technique — 5 briques fondamentales

| Brique | Description |
|---|---|
| **WhatsApp Business API** | Canal principal d'interaction. Support natif de texte, photos, documents, notes vocales, localisation GPS. |
| **Chatbots (arbres de décision)** | Parcours automatisés configurables : FAQ, collecte d'informations, pré-qualification, orientation. |
| **Agents IA (Q&A)** | Couche complémentaire aux chatbots : réponses intelligentes basées sur un historique de questions/réponses fourni par le client. |
| **Moteur de notifications & campagnes** | Envoi automatique de messages programmés (transactionnels ou marketing), segmentation par tags, multicanal. |
| **Moteur de paiement intégré** | Wave, Orange Money, MTN Momo, Moov Money, carte bancaire, espèces. Lien de paiement envoyé directement sur WhatsApp. |

**Intégrations API :** Architecture API-first. Connecteurs CRM (Odoo, Dynamics, ZohoCRM, Brevo), documents (Google Drive, OneDrive), comptabilité (Odoo), logiciels métiers via API ou exports/imports.

---

## 3. Fonctionnalités de la plateforme

### 3.1 Capture de numéros (QR codes & liens)

Création de liens ou QR codes uniques pour chaque canal d'acquisition. Quand un prospect scanne un code ou clique un lien, il est redirigé vers WhatsApp et son numéro + informations alimentent la base en temps réel. L'origine de chaque prospect est tracée pour mesurer la performance de chaque canal.

**Cas d'usage :** Lors d'une campagne terrain, un QR code unique est attribué à chaque commercial. Le suivi en temps réel permet de mesurer la performance individuelle et de piloter la rémunération variable.

### 3.2 Chatbots & Agents IA

Dès qu'un prospect crée une conversation, la prise en charge est automatisée par chatbot :

- **Partage d'informations** : campagnes en cours, offres, par texte, photo ou note vocale
- **Collecte d'informations** : documents (photo carte grise), informations de pré-qualification (texte ou vocal), localisation GPS (sinistres auto)
- **Formulaires mobiles** : en cas de collecte complexe, un formulaire mobile est partagé via lien WhatsApp
- **Agents IA** : réponses automatisées basées sur le Q&A client, agent commercial automatisé capable de partager des tarifications et transmettre à un humain si nécessaire

### 3.3 Ticketing

Chaque nouvelle conversation crée automatiquement un ticket dans Docaya centralisant :

- Informations et documents collectés (photo carte grise, données digitalisées)
- Statut du prospect dans le pipeline de vente (devis soumis, paiement en attente, etc.)
- Notes et tags sur le prospect ("à rappeler", "en attente de documents", etc.)

### 3.4 Devis automatisés & Catalogue produit

- Configuration de produits avec tarificateur automatisé (interne ou via API externe)
- Gestion des promotions par défaut et personnalisables par opérateur
- Gestion des stocks avec réponse en direct aux clients

### 3.5 Paiement intégré

Moyens de paiement acceptés directement via WhatsApp :

- Wave
- Mobile money (Orange Money, MTN Momo, Moov Money)
- Carte bancaire
- Espèces et virement (validation manuelle par opérateur)

Statut de paiement mis à jour automatiquement en temps réel sur la plateforme.

### 3.6 Notifications & Campagnes

**Notifications programmées :** programmes de rappels paramétrables par situation (renouvellement, paiement en attente, échéance) avec nombre de rappels, fréquence et dates relatives configurables.

**Campagnes :** segmentation de la base clients par tags, envoi ciblé avec boutons d'action (lancer un chatbot, ouvrir un lien de paiement, mettre à jour un ticket).

### 3.7 Tableaux de bord

Dashboard configurable avec KPIs, graphiques et cartes :

- Nombre de nouveaux prospects par jour et par commercial
- Taux de conversion des prospects par commercial
- Nombre de prospects à chaque étape du pipeline de vente
- Tickets ouverts, devis soumis, paiements reçus

---

## 4. Catalogue des offres de services — 7 briques modulaires

Chaque brique est activable indépendamment et applicable à tout secteur d'activité.

### 4.1 Agent d'Accueil & Orientation

**Ce que c'est :** Un chatbot ou agent IA qui répond automatiquement aux sollicitations entrantes sur WhatsApp. Il accueille le client, comprend sa demande, et l'oriente vers le bon service ou la bonne action.

**Fonctionnalités :**
- Réponses automatisées aux questions fréquentes (FAQ)
- Orientation intelligente vers le service ou l'interlocuteur approprié
- Prise de rendez-vous automatisée
- Collecte d'informations préliminaires (documents, coordonnées, préférences)
- Formulaires mobiles via lien WhatsApp
- Escalade vers un opérateur humain si nécessaire (avec transfert du contexte)

**Mécanisme :** Chatbot à arbre de décision configurable + couche Agent IA optionnelle (Q&A). Chaque conversation crée automatiquement un ticket dans le dashboard.

**Secteurs :** Assurances (FAQ, prise de RDV), Immobilier (infos locataires), Hôtellerie (disponibilités, réservation), Logistique (pré-qualification demandes), Éducation (orientation étudiants/parents), Transport aérien (infos bagages, horaires), Utilities (signalement, RDV), Banques (infos produits).

### 4.2 Recouvrement Automatisé

**Ce que c'est :** Un programme de relances automatiques envoyées par WhatsApp pour récupérer les paiements en retard ou à échéance. Mécanisme identique quel que soit le type de créance.

**Fonctionnalités :**
- Programmes de relances paramétrables (nombre, fréquence, délais relatifs à l'échéance)
- Gestion d'échéanciers de paiement personnalisés
- Suivi des paiements partiels et des impayés
- Envoi automatique du lien de paiement intégré (Wave, OM, MTN, CB) dans le message de relance
- Rapports de recouvrement et tableaux de bord
- Application automatique de pénalités de retard (configurable)

**Sous-catégories :**
- **Primes & Cotisations** (assurances, mutuelles)
- **Loyers** (immobilier — relances locataires, suivi impayés, rapports)
- **Frais de Scolarité** (échéanciers personnalisés, relances parents/étudiants, paiements partiels — client : Ivoire Académie)

**Secteurs :** Immobilier (loyers), Assurances (primes/cotisations), Éducation (frais de scolarité), Banques (crédits), Mutuelles (cotisations), Utilities (factures), Hôtellerie (acomptes/no-show).

### 4.3 Notifications Sortantes

**Ce que c'est :** Envoi automatisé et programmé de messages WhatsApp (ou SMS, email) vers les clients, déclenché par un événement ou une date.

**Notifications transactionnelles :**
- Confirmations (paiement, réservation, souscription, commande, inscription)
- Rappels (échéance, rendez-vous, renouvellement, check-in)
- Alertes (changement de statut, retard, anomalie, coupure programmée)
- Envoi de documents (reçus, attestations, factures, quittances, cartes d'embarquement)

**Campagnes marketing :**
- Campagnes promotionnelles et offres spéciales
- Lancement de nouveaux produits ou services
- Relance de clients inactifs (win-back)
- Communication institutionnelle ou événementielle

**Secteurs :** Tous secteurs. Cas concrets : rappel de vol J-1 (aérien), confirmation de commande (retail/logistique), alerte coupure (utilities), rappel échéance (assurances/banques/immobilier), infos pré-arrivée (hôtellerie).

### 4.4 Vente & Souscription

**Ce que c'est :** Un tunnel de vente complet sur WhatsApp : le client découvre le produit, le sélectionne, reçoit un devis ou un prix, et paie — le tout dans une seule conversation.

**Fonctionnalités :**
- Présentation des produits/services disponibles dans la conversation
- Tarificateur automatisé (configurable dans Docaya ou via API externe)
- Génération de devis automatisés
- Gestion des promotions
- Paiement intégré via lien WhatsApp (Wave, OM, MTN, Moov, CB)
- Renouvellement de contrats ou abonnements
- Vente de services additionnels (upsell / cross-sell)

**Mécanisme :** Le chatbot guide le client : sélection produit → configuration → devis → paiement. Pipeline de vente avec statuts (devis soumis, paiement en attente, validé). Tarificateur interne ou connecté via API externe.

**Secteurs :** Assurances (souscription auto/vie, renouvellement), Retail (prise de commande), Éducation (inscription + paiement frais), Banques (ouverture compte, souscription produits), Hôtellerie (surclassement, services additionnels), Aérien (bagages supplémentaires, sièges premium), Distribution (commande + paiement).

### 4.5 Déclaration & Suivi d'Incidents

**Ce que c'est :** Un parcours guidé sur WhatsApp permettant au client de déclarer un problème, fournir les pièces justificatives, et suivre la résolution.

**Fonctionnalités :**
- Déclaration guidée par le chatbot (type de problème, circonstances, urgence)
- Collecte de pièces justificatives (photos, documents, reçus) directement dans la conversation
- Collecte de localisation GPS (si pertinent)
- Création automatique d'un ticket de suivi dans le dashboard
- Notifications de statut au client (à chaque étape de traitement)
- Escalade vers un opérateur humain si nécessaire

**Secteurs :** Assurances (sinistres auto : photo carte grise + localisation GPS), Immobilier (maintenance, fuites), Utilities (signalement pannes/fuites), Aérien (bagage perdu/endommagé), Hôtellerie (problème chambre).

### 4.6 Workflows Métiers Spécialisés

**Ce que c'est :** Automatisation de processus métiers spécifiques allant au-delà de l'interaction client — des chaînes d'actions déclenchées automatiquement dans le back-office.

**Fonctionnalités :**
- **Génération automatique de documents** : conditions particulières, contrats, attestations, quittances, reçus, fiches de paiement (formats paramétrables)
- **Tunnel commande / paiement** : flow complet sélection → confirmation → paiement → livrable
- **Rapprochement de paiements** : mise à jour automatique du statut de paiement dès réception via mobile money ou CB (élimine la réconciliation manuelle)
- **Calculs et reversements** : automatisation de calculs financiers récurrents (commissions, reversements, soldes nets) avec génération de rapports

**Secteurs :** Assurances (conditions particulières post-paiement), Immobilier (quittances + reversements propriétaires), Logistique (confirmation expédition), Éducation (attestation d'inscription post-paiement).

### 4.7 Enquête de Satisfaction Automatisée (NPS)

**Ce que c'est :** Un message WhatsApp envoyé automatiquement après un événement défini, demandant au client de noter son expérience sur une échelle de 0 à 10. Fonctionnalité transversale activable pour tout secteur.

**Fonctionnalités :**
- Envoi automatisé post-événement (configurable par type d'événement)
- Calcul automatique du Net Promoter Score (NPS) : Promoteurs (9-10), Passifs (7-8), Détracteurs (0-6)
- Collecte de feedback qualitatif en complément du score
- Rapports et tableaux de bord de satisfaction
- Segmentation des répondants pour actions correctives ciblées

**Secteurs :** Tous secteurs. Le mécanisme est identique partout, seul l'événement déclencheur change (paiement de loyer, résolution sinistre, livraison, check-out hôtel, fin d'appel service client).

---

## 5. Synthèse — Architecture modulaire

| Offre | Briques techniques utilisées | Ce qui se configure |
|---|---|---|
| Agent d'Accueil | Chatbot + Agent IA + Ticketing | Arbre de décision, FAQ, formulaires |
| Recouvrement | Notifications + Paiement | Règles de relance, échéanciers, montants |
| Notifications | Moteur de notifications | Événements déclencheurs, templates, segments |
| Vente / Souscription | Chatbot + Tarificateur + Paiement | Catalogue produits, prix, promotions |
| Incidents | Chatbot + Ticketing + Notifications | Types d'incidents, pièces requises, SLA |
| Workflows Métiers | API + Paiement + Documents | Templates docs, règles métier, calculs |
| Satisfaction (NPS) | Notifications + Chatbot (collecte) | Événement déclencheur, échelle, questions |

**Principe clé :** *Ce qui change d'un secteur à l'autre, ce n'est pas la technologie — c'est la configuration.*

---

## 6. Structure suggérée pour le site vitrine

### Pages principales

1. **Accueil** — Baseline + proposition de valeur + CTA "Demander une démo"
2. **Plateforme** — Présentation des 5 briques techniques + capture d'écran dashboard/mobile
3. **Solutions** (par offre) — Les 7 briques modulaires avec cas d'usage sectoriels
4. **Secteurs** — Pages dédiées par industrie (assurance, immobilier, éducation, banque, hôtellerie, transport, utilities, retail)
5. **Tarifs** — Grille tarifaire ou CTA vers contact commercial
6. **À propos** — Équipe, vision, Côte d'Ivoire / Afrique de l'Ouest
7. **Contact** — Formulaire + WhatsApp direct + email

### Sections transversales

- **Intégrations** : CRM (Odoo, Dynamics, ZohoCRM), documents (Google Drive, OneDrive), comptabilité, API ouverte
- **Témoignages / Cas clients** : Ivoire Académie (scolarité), clients assurance auto, etc.
- **FAQ** : questions fréquentes sur la plateforme
- **Blog / Ressources** : contenus éducatifs sur le conversational commerce en Afrique

---

## 7. Éléments de branding à récupérer

- **Couleur principale :** Violet/bleu (#4A3AFF approximatif d'après les PDFs)
- **Logo :** Icône bulle conversation + texte "docaya" en minuscules, police sans-serif bold
- **Ton :** Professionnel B2B, orienté résultats, vocabulaire clair
- **Visuels récurrents :** Screenshots dashboard desktop + vues mobiles WhatsApp côte à côte
