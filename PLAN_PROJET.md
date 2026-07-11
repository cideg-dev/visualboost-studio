# PLAN PROJET - VisualBoost Studio

## Objectif : Générer 5 000 FCFA/jour minimum avec les plugins OpenCode

---

## ÉTAPE 0 : Configuration technique (FAIT ✓)

- [x] Plugins installés : `opencode-nanobanana`, `opencode-pollinations-plugin`, `opencode-gemini-image`, `opencode-plugin-image-gen`
- [x] Clés API configurées : `GEMINI_API_KEY`, `ELEVENLABS_API_KEY`
- [x] FFmpeg installé (C:\ffmpeg + PATH)
- [x] Variables d'environnement enregistrées

---

## 🧠 STRATÉGIE PRIX POUR LE MARCHÉ AFRICAIN

### Le problème
- Prix bas (500-1 500 FCFA) → perçu comme "pas sérieux, travail d'amateur"
- Prix moyens (2 000-5 000 FCFA) → "c'est cher pour un local"
- Les gens comparent avec les prix occidentaux et se disent "pourquoi payer ?"
- La négociation fait partie de la culture d'achat
- **Personne ne paie par carte**, tout passe par Mobile Money

### La solution : Double affichage des prix

Le site affiche **toujours deux prix** côte à côte :

| Service | International (USD) | Local (FCFA) |
|---------|-------------------|--------------|
| Flyer / visuel simple | $4 | 2 000 FCFA |
| Logo | $6 | 3 000 FCFA |
| Vidéo promotionnelle | $10 | 5 000 FCFA |
| Pack réseaux sociaux (10 visuels) | $15 | 7 500 FCFA |
| Pack complet (20 visuels + 4 vidéos) | $40 | 20 000 FCFA |

**Pourquoi ça marche psychologiquement :**
- Le client voit $4 et pense "c'est donné pour un travail occidental"
- Il voit le prix local et se dit "j'ai une réduction par rapport au marché international"
- Il a l'impression de faire une affaire, pas de perdre son argent
- Tu peux même ajouter une badge : "🌍 Servant 12 pays – Prix locaux adaptés"

### Modes de paiement (uniquement Mobile Money)
- **Orange Money** (priorité #1 selon pays)
- **MTN Mobile Money**
- **Moov / Wave / Free Money** selon disponibilité
- **Pas de carte bancaire** sur le site (trop de friction)
- Pas de Selar non plus pour les locaux (trop compliqué)

### La méthode "1er visuel gratuit" qui convertit
1. Prospect te contacte sur WhatsApp
2. Tu lui fais **1 visuel gratuit** pour son commerce
3. Il le poste, ses amis voient, il reçoit des compliments
4. Il revient pour commander les suivants **payants**
5. *Mise de départ : zéro. Résultat : confiance établie + preuve sociale*

---

## ÉTAPE 1 : Créer notre page vitrine

### 1.1 Choix technique
Site statique hébergé gratuitement. Options :
- **GitHub Pages + HTML/CSS/JS** (contrôle total, gratuit, 0 maintenance)
- **Vercel/Netlify** (si on veut des formulaires ou un petit backend)
- ~~Carrd.co~~ (pas assez customisable pour nous)

**Choix retenu :** [GitHub Pages, Vercel ou Netlify – à décider]

### 1.2 Structure de la page
```
Accueil
├── Hero : "Création visuelle par IA – Qualité internationale, prix local"
│   Sous-titre : "Servant clients en Afrique, Europe & Amériques"
├── Services + Tarifs (double colonne USD / FCFA)
│   ├── Flyer / visuel réseau social    → $4   | 2 000 FCFA
│   ├── Logo / identité visuelle        → $6   | 3 000 FCFA
│   ├── Affiche / flyer promotionnel    → $5   | 2 500 FCFA
│   ├── Vidéo courte (15-30s)           → $10  | 5 000 FCFA
│   ├── Pack réseaux (10 visuels)       → $15  | 7 500 FCFA
│   └── Pack complet (20 + 4 vidéos)    → $40  | 20 000 FCFA
├── ⭐ Offre spéciale : 1er visuel OFFERT
├── Galerie d'exemples (générés par nos plugins, eau légère)
├── Paiements acceptés : OM · MTN · Moov · Wave
├── Témoignages clients (même 1-2 suffisent)
├── À propos (programmeur, passionné de création & tech)
└── Contact → WhatsApp direct (bouton flottant partout)
```

### 1.2.b Section spéciale "Pourquoi nous ?"
```
✓ Prix adaptés à l'Afrique (paiement Orange Money / MTN)
✓ 1er visuel gratuit pour tester
✓ Livraison en 24h maximum
✓ Créé par un programmeur (compréhension technique)
✓ Pas d'abonnement, pas de forfait caché
```

### 1.3 Pages supplémentaires
- `/packs` → Catalogue des packs Selar
- `/blog` → Articles sur l'IA, tutos, conseils (SEO)
- `/faq` → Questions fréquentes

### 1.4 Contenu à générer pour la galerie
- 5-10 images d'exemple via `pollinations-plugin` ou `gemini-image`
- 2-3 maquettes de packs templates
- [ ] À faire ensemble

---

## ÉTAPE 2 : Produits numériques (revenu passif)

### 2.1 Packs de templates WhatsApp
Créer **une fois**, vendre **indéfiniment**.

**Distribution :**
- Fichier envoyé directement par WhatsApp après paiement Mobile Money
- Pas de plateforme intermédiaire pour les clients locaux (trop de friction)
- Optionnel : Selar.co pour les clients internationaux

| Pack | Contenu | Prix FCFA |
|------|---------|-----------|
| Pack Ramadan | 30 visuels religieux + 10 bannières | 2 000 |
| Pack Anniversaire | 20 visuels + 5 vidéos courte | 2 500 |
| Pack Good Morning | 50 images quotidiennes | 1 500 |
| Pack Business | 30 visuels pro (offres, promo, new) | 3 000 |
| Pack Mariage | 20 visuels + 5 faire-part | 2 500 |
| Pack Noël/Nouvel An | 30 visuels festifs | 2 000 |

**À faire :**
- [ ] Créer le premier pack test (ex: Good Morning)
- [ ] Publier sur Selar.co
- [ ] Partager le lien sur WhatsApp/TikTok

### 2.2 Templates pour sites vitrines (pour programmeurs)
- Tu créés des templates HTML/CSS pour sites vitrines
- Vente sur Selar ou Gumroad
- Prix : 3 000 - 10 000 FCFA selon complexité
- Cible : autres programmeurs, freelances, agences

---

## ÉTAPE 3 : Canaux d'acquisition clients

### 3.1 TikTok Faceless (priorité #1)
- Chaîne sans montrer son visage
- Contenu généré par `nanobanana` (Veo 3) + `elevenlabs` (voix)
- **Niches qui marchent en Afrique :**
  - Culture/histoire africaine
  - Citations motivation
  - Conseils business/entrepreneuriat
  - Faits insolites, astuces tech
- **Monétisation** : Fonds créateurs TikTok + vente packs via bio

### 3.2 YouTube Shorts / Facebook Reels
- Même contenu que TikTok, republié
- YouTube = Adsense ($$$)

### 3.3 WhatsApp Business (stratégie directe)
- Catalogue WhatsApp intégré
- Statuts quotidiens avec exemples de ton travail
- Diffusion vers listes de contacts ciblés

### 3.4 LinkedIn (pour le B2B)
- Publier des créations (infographies, visuels pro)
- Cibler : entrepreneurs, startuppeurs, consultants
- Offrir 1 visuel gratuit pour attirer

### 3.5 Mobile Money = canal de vente direct
- Avoir un numéro dédié Orange Money / MTN
- Paiement avant livraison pour les habitués
- Paiement après livraison (1er visuel gratuit) pour les nouveaux
- Envoyer un reçu / confirmation par WhatsApp

### 3.6 Groupes Facebook locaux
- "Devenu.e.s d'Afrique", "Entrepreneurs africains"
- Ne pas spammer → apporter de la valeur : "Voici 3 astuces pour vos visuels"

---

## ÉTAPE 4 : Revendeurs (Phase 3)

Quand tu as assez de templates et un process rodé :

1. **Recruter** 5-10 jeunes (étudiants, mamans, chômeurs)
2. **Former** via un guide PDF + 1 session WhatsApp
3. **Ils prospectent** dans leur marché/quartier
4. **Ils envoient** les commandes → toi tu génères via les plugins
5. **Commission** : 40% pour eux, 60% pour toi

**Modèle économique :**
- 10 revendeurs x 3 clients/jour x 1 000 FCFA de commission pour toi
- = **30 000 FCFA/jour**

---

## ÉTAPE 5 : Abonnements mensuels (Phase 4)

Le revenu récurrent :

- **Offre Starter** : 10 visuels/mois → 15 000 FCFA/mois
- **Offre Pro** : 20 visuels + 4 vidéos/mois → 35 000 FCFA/mois
- **Cibles** : coiffeurs, restaurants, hôtels, agences immobilières, églises

**Objectif** : 20 abonnés = 300 000 - 700 000 FCFA/mois

---

## Roadmap

| Semaine | Action |
|---------|--------|
| S1 | Créer la page vitrine + galerie d'exemples |
| S2 | Générer pack test + publier sur Selar |
| S3 | Lancer 1 chaîne TikTok faceless (10 vidéos) |
| S4 | Publier sur LinkedIn + contacter 5 prospects |
| M2 | 2 packs dispo + 50 abonnés TikTok |
| M3 | Premier client abonnement mensuel |
| M6 | 5 revendeurs actifs + 10 abonnés |
| M12 | 20 revendeurs + 50 abonnés = ~1 000 000 FCFA/mois |

---

## Notes de suivi

- [x] Date de début : 11/07/2026
- [x] Lien site vitrine : https://cideg-dev.github.io/visualboost-studio/
- [ ] Lien Selar : ...
- [ ] Comptes TikTok/YouTube : ...

---

---

## 📍 CHECKPOINT AVANT REDÉMARRAGE OPENCODE (11/07/2026)

### Ce qui est fait
- [x] Plugins configurés dans `opencode.json` : nanobanana, pollinations, gemini-image
- [x] Plugin local `image-gen.ts` installé dans `plugins/image-gen/`
- [x] `package.json` configuré avec `@opencode-ai/plugin`
- [x] Clés API enregistrées : `GEMINI_API_KEY`, `ELEVENLABS_API_KEY`
- [x] FFmpeg installé et opérationnel
- [x] Fichier `PLAN_PROJET.md` créé avec stratégie et roadmap
- [x] Logo généré (pollinations.ai)
- [x] Page vitrine HTML/CSS/JS complète créée dans `docs/`
- [x] Page FAQ créée
- [x] 3 visuels d'exemple générés pour la galerie
- [x] GitHub Pages activé : https://cideg-dev.github.io/visualboost-studio/
- [x] WhatsApp : +229 01 64 28 51 72
- [x] MoMo Bénin : +229 01 62 04 45 24
- [x] Email : davi.ekue@gmail.com
- [x] Charte : Bleu #1a3c6e / Or #f5a623 / Blanc

### Prochaine étape (S2)
**Générer le premier pack template + publier sur Selar**

Ce qu'il faudra décider/fabriquer ensemble :
1. **Nom de l'entreprise** → à choisir
2. **Logo** → à générer avec `gemini-image` ou `nanobanana`
3. **Couleurs de la charte** → 2-3 couleurs à choisir
4. **Photo de profil / avatar** → optionnel (on peut utiliser le logo)
5. **Code HTML/CSS/JS du site** → à créer et héberger

### Conversation retenue
- Projet : studio de création visuelle par IA
- Clientèle : Afrique (petits commerces, influenceurs, particuliers)
- Prix : double affichage USD/FCFA
- Paiement : Mobile Money uniquement (Orange Money, MTN, Moov, Wave)
- Stratégie : 1er visuel gratuit, livraison WhatsApp, pas de plateforme
- Canaux : TikTok faceless, YouTube Shorts, WhatsApp Business, LinkedIn
- Objectif court terme : page vitrine + galerie d'exemples
- Pas de photo de nous obligatoire → le logo suffit comme identité

---

*Document évolutif – mis à jour le 11/07/2026 – Checkpoint #1*
