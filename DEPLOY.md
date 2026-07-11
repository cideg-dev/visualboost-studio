# Déploiement — VisualBoost Studio

## Prérequis

- Les fichiers du site sont dans le dossier `docs/`
- Le nom du dépôt GitHub : `visualboost-studio`
- Compte GitHub configuré

## Option 1 : GitHub Pages (recommandé, gratuit)

```bash
# 1. Ajouter les fichiers modifiés
git add docs/ DEPLOY.md
git commit -m "Mise à jour site + PWA"
git push origin main

# 2. Activer GitHub Pages
# Aller sur https://github.com/cideg-dev/visualboost-studio
# Settings → Pages → Source: Deploy from a branch
# Branch: main, folder: /docs → Save

# 3. Le site est en ligne à :
# https://cideg-dev.github.io/visualboost-studio/
```

## Option 2 : Netlify (gratuit, déploiement automatique)

1. Créer un compte sur https://app.netlify.com
2. Cliquer sur "Add new site" → "Import an existing project"
3. Connecter GitHub et sélectionner `visualboost-studio`
4. Configurer :
   - Base directory : laisser vide
   - Build command : laisser vide
   - Publish directory : `docs`
5. Cliquer "Deploy site"

## Option 3 : Vercel (gratuit)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --cwd docs --prod
```

## PWA — Installation mobile

Une fois le site en ligne :

1. Ouvrir le site dans Chrome Android ou Safari iOS
2. Un bandeau "Installer l'application" apparaît (ou menu "Partager" → "Ajouter à l'écran d'accueil")
3. L'application s'installe comme une app native

Le service worker (`sw.js`) met en cache les pages principales pour un fonctionnement hors-ligne.
