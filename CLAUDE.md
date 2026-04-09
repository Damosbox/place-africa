# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Contexte

Site vitrine pour **Docaya**, plateforme conversationnelle B2B (Box Africa / client Place Africa).
Marché cible : Côte d'Ivoire / Afrique de l'Ouest. Langue : français.

## Source de vérité — Contenu

**Toujours lire en premier :** `docaya/docaya-site-vitrine-content.md`

Ce fichier consolide les 3 documents source (présentation 2025, technologies clés, catalogue offres v2.0 mars 2026). Ne jamais inventer de fonctionnalités ou chiffres non documentés.

## Vault

- Fiche projet : `vault/projects/place-africa.md`
- Notes brutes : `vault/raw/place-africa/notes.md`

## Stack (à définir)

- Framework : statique ou SSR (Next.js / Astro — non arrêté)
- Branding : violet `#4A3AFF`, police sans-serif bold, logo bulle + "docaya"
- Ton : professionnel B2B, orienté résultats

## Architecture du site

| Page | Contenu clé |
|---|---|
| Accueil | Baseline "Des conversations impactantes", CTA démo, canaux (WhatsApp, Messenger, Instagram, SMS, Email) |
| Plateforme | 5 briques : WhatsApp Business API, Chatbots, Agents IA, Notifications/Campagnes, Paiement intégré |
| Solutions | 7 offres modulaires : Accueil & Orientation, Recouvrement, Notifications Sortantes, Vente & Souscription, Incidents, Workflows Métiers, NPS |
| Secteurs | Assurances, Immobilier, Éducation, Banques, Hôtellerie, Transport aérien, Utilities, Retail |
| Tarifs | Grille ou CTA commercial |
| À propos | Équipe, vision Afrique |
| Contact | Formulaire + WhatsApp +2250701795666 + contact@docaya.com |

**Principe Docaya :** la technologie est commune à tous les secteurs — seule la configuration change.

## Liens

- www.docaya.com | app.docaya.com
- contact@docaya.com | +2250701795666

## Règles

- Respecter le branding Docaya (couleurs, ton, vocabulaire)
- Les intégrations CRM mentionnées : Odoo, Dynamics, ZohoCRM, Brevo, Google Drive, OneDrive
- Moyens de paiement intégrés : Wave, Orange Money, MTN Momo, Moov Money, carte bancaire
- Client de référence existant : Ivoire Académie (frais de scolarité)
