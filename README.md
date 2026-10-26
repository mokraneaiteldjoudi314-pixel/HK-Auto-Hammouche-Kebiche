# HK Auto — Premium Automotive Experience

## Vue d'ensemble

Le dépôt contient une démonstration premium automobile pour HK Auto, construite avec React + Vite + TypeScript et compatible avec une publication publique sur Vercel.

## Architecture proposée

- `src/components/` : layout, header, footer, scène 3D
- `src/pages/` : accueil, catalogue, fiche véhicule, à propos, contact
- `src/data/` : données de démonstration des véhicules
- `src/config/` : configuration de marque et paramètres de contact
- `src/lib/` : client Supabase
- `src/styles.css` : système visuel premium complet

## Lancer le projet localement

```bash
npm install
npm run dev
```

Le site est accessible sur :

- http://localhost:5173

## Build de production

```bash
npm run build
```

## Publication publique

La publication publique la plus simple est de connecter ce dépôt à Vercel :

1. Créer un compte Vercel et importer ce dépôt GitHub.
2. Sélectionner le dépôt `HK-Auto-Hammouche-Kebiche`.
3. Utiliser les variables d'environnement suivantes :
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Déployer le projet.

Vercel détecte automatiquement le projet Vite et publie le site avec un domaine public.

## Supabase

1. Créer un projet Supabase.
2. Copier les valeurs du projet dans le fichier `.env.local` :

```bash
cp .env.example .env.local
```

Puis remplir :

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxxxx
```

3. Importer le schéma SQL dans l’éditeur SQL du projet Supabase :

```sql
-- voir le fichier supabase/schema.sql
```

Le contact utilise Supabase seulement si les variables sont configurées. Si elles ne sont pas présentes, le formulaire reste en mode démo sans faux envoi.

## Remarques

- Les données de véhicules sont de démonstration et identifiées comme non vérifiées.
- La scène 3D utilise une abstraction géométrique adaptée à un contexte sans modèle GLB gratuit validé.
- Le formulaire ne prétend pas envoyer un message sans service d’envoi configuré.
