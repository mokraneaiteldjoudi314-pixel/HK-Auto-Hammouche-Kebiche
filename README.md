# HK Auto — Premium Automotive Experience

## Vue d'ensemble

Le dépôt est actuellement vide d'application, avec seulement un fichier README de départ. La première version fonctionnelle a été créée en React + Vite + TypeScript, avec une architecture orientée démonstration premium automobile.

## Architecture proposée

- `src/components/` : layout, header, footer, scène 3D
- `src/pages/` : accueil, catalogue, fiche véhicule, à propos, contact
- `src/data/` : données de démonstration des véhicules
- `src/config/` : configuration de marque et paramètres de contact
- `src/styles.css` : système visuel premium complet

## Commandes de lancement

```bash
npm install
npm run dev
```

La démo est ensuite accessible sur :

- http://localhost:5173

## Build de production

```bash
npm run build
```

## Remarques

- Les données de véhicules sont de démonstration et identifiées comme non vérifiées.
- La scène 3D utilise une abstraction géométrique adaptée à un contexte sans modèle GLB gratuit validé.
- Le formulaire ne prétend pas envoyer un message sans service d’envoi configuré.
