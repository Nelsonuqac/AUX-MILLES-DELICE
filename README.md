# Aux mille délices

## 📋 Description

Aux mille délices est un site vitrine interactif pour un restaurant africain basé à Paris.
Le site présente l’établissement, son menu, permet de réserver une table, de contacter le restaurant et de consulter les offres d’emploi.

Ce projet met l'accent sur :

une expérience utilisateur fluide (SPA simulée en JavaScript)

un design responsive moderne

une interface riche en animations

🛠️ Technologies utilisées

HTML5 : structure sémantique

CSS3 : animations, responsive design, mises en page complexes

JavaScript (ES6) : navigation dynamique, interaction, formulaires

Aucune bibliothèque externe : performances optimisées

Outils : VS Code, GitHub Pages, Chrome DevTools

✨ Fonctionnalités principales
Navigation & Interface

SPA simulée : pages affichées/masquées sans rechargement

Menu sticky + menu mobile (hamburger)

Transitions animées entre les pages

Pages interactives

Accueil : hero animé, présentation

Menu : cartes animées, sections structurées

Réservation : formulaire complet + validation

Contact : formulaire + coordonnées + carte

Carrière : 4 offres d’emploi + formulaire de candidature via modal

Expérience utilisateur

Animations au scroll (IntersectionObserver)

Hover effects avancés

Design responsive (mobile/tablette/desktop)

📁 Structure du projet
aux-mille-delices/
│
├── index.html      # Structure complète du site (SPA)
├── style.css       # Styles + responsive + animations
├── script.js       # Navigation, formulaires, modal carrière
└── README.md       # Documentation

🚀 Fonctionnement technique
🔹 SPA simulée en JavaScript

Le site utilise un mécanisme simple :

chaque section du site = <div class="page">

JavaScript ajoute/enlève la classe .active

transitions CSS pour un rendu fluide

Cela permet :

une navigation instantanée

une meilleure expérience utilisateur

un code plus facile à maintenir

🔹 Formulaires interactifs

Validation native HTML5

Messages de confirmation

Réinitialisation automatique après soumission

🔹 Modal Candidature (Carrière)

Ouverture via boutons "Postuler"

Pré-remplissage du nom du poste

Fermeture automatique (croix, extérieur, soumission)

📱 Responsive Design

Grilles CSS adaptatives (Grid + Flexbox)

Menu mobile dédié

Optimisation des images (Unsplash)

Breakpoint principal : @media (max-width: 768px)

Le site fonctionne correctement sur :

mobile (375px)

tablette (768px)

desktop (1200px+)

🧩 Architecture JavaScript
Fonctions principales :

navigateToPage() → gestion SPA

menu mobile toggle

IntersectionObserver → animations au scroll

Formulaire de réservation

Formulaire de contact

Modal de candidature

Le JavaScript est 100% natif, optimisé et commenté pour assurer une maintenance simplifiée.

🔧 Évolutions possibles

Pour une version 2.0 du site :

backend pour traiter les réservations et candidatures

intégration réelle de Google Maps

espace administrateur pour gérer les offres d'emploi

galerie photos et avis clients

système de paiement en ligne

👥 Auteurs

Projet réalisé par :

NJIKAM YOGWA NELSON

LAURENT NGWE

EDDY BRIAN

ADEGOKE RAJI BILHAL

DIABATE VAMOUSSA

Session : Automne 2025
Cours : Développement Web

📜 Licence

Projet réalisé dans un cadre académique.
Usage libre pour la démonstration et l'apprentissage.

**Date** : Novembre 2024  
**Statut** : ✅ Prêt pour la démonstration
