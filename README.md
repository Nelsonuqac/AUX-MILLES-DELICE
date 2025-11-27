# Aux mille délices

## 📋 Description

**Aux mille délices** est un site web vitrine pour un restaurant de cuisine africaine authentique situé à Paris. Le site présente l'établissement, son menu, permet de réserver une table, de contacter le restaurant et de consulter les offres d'emploi disponibles.

Ce projet met en valeur la richesse culinaire africaine dans une interface moderne et responsive, offrant une expérience utilisateur fluide et agréable.

---

## 🛠️ Technologies utilisées

- **HTML5** - Structure et contenu sémantique
- **CSS3** - Styles et mise en page responsive
- **JavaScript (Vanilla)** - Navigation dynamique et interactions
- **Aucune bibliothèque externe** - Code 100% natif pour des performances optimales

---

## ✨ Fonctionnalités principales

### 🏠 Page d'accueil
- Section hero attractive avec appel à l'action
- Présentation de l'histoire du restaurant
- Navigation fluide vers les autres sections

### 📖 Menu
- Affichage des entrées, plats principaux et desserts
- Photos appétissantes pour chaque plat
- Prix clairement affichés
- Badges pour les options végétariennes
- Menu découverte spécial avec accord de boissons africaines

### 📅 Réservation
- Formulaire complet de réservation de table
- Sélection de la date, heure et nombre de convives
- Champ pour demandes spéciales (allergies, anniversaire, etc.)
- Informations pratiques : horaires d'ouverture et contact express
- **Validation des formulaires avec messages de confirmation**

### 📧 Contact
- Formulaire de contact avec validation
- Coordonnées complètes (adresse, téléphone, email)
- Horaires d'ouverture détaillés
- Emplacement sur carte (placeholder Google Maps)

### 💼 Carrière
- Présentation des avantages à rejoindre l'équipe
- Liste des offres d'emploi actuelles (4 postes disponibles)
- Descriptions détaillées des profils recherchés
- Formulaire de candidature via modal popup
- Option de candidature spontanée

### 🎨 Design et UX
- **Design responsive** adapté mobile, tablette et desktop
- Navigation sticky qui reste accessible en scrollant
- **Menu hamburger pour mobile**
- Animations au scroll pour une expérience dynamique
- Palette de couleurs chaleureuses (orange #ea580c dominant)
- Images haute qualité via Unsplash

### Structure des fichiers

```
aux-mille-delices/
│
├── index.html          # Fichier HTML principal (structure complète du site)
├── style.css           # Fichier CSS (tous les styles et responsive)
├── script.js           # Fichier JavaScript (navigation et interactions)
└── README.md           # Ce fichier
```

---

## 🎯 Navigation et fonctionnement

### Navigation entre les pages
Le site utilise un système de **Single Page Application (SPA)** :
- Toutes les pages sont dans le même fichier HTML
- JavaScript affiche/masque les sections selon la navigation
- Transitions fluides sans rechargement de page
- Menu sticky accessible en permanence

### Formulaires interactifs
- **Formulaire de réservation** : Validation des champs requis avec message de confirmation
- **Formulaire de contact** : Envoi simulé avec message de succès
- **Formulaire de candidature** : Modal popup élégant pour postuler aux offres d'emploi

### Menu responsive
- **Desktop** : Menu horizontal dans la barre de navigation
- **Mobile** : Menu hamburger qui s'ouvre en overlay
- Fermeture automatique après sélection d'une page

---

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à tous les écrans :

- **Desktop (> 768px)** : Layout en grille avec colonnes multiples
- **Tablette (768px)** : Adaptation des grilles en 1 ou 2 colonnes
- **Mobile (< 768px)** : Layout en colonne unique avec menu hamburger

### Points de rupture (breakpoints)
```css
@media (max-width: 768px) {
  /* Styles pour mobile et tablette */
}
```

---

## 🎨 Palette de couleurs

- **Orange principal** : `#ea580c` (boutons, accents)
- **Orange foncé** : `#c2410c` (hover)
- **Fond clair** : `#f9fafb` (sections alternées)
- **Texte principal** : `#333` et `#111`
- **Texte secondaire** : `#6b7280`
- **Badges végétariens** : `#fed7aa` (fond) / `#9a3412` (texte)

---

## 🚀 Fonctionnalités JavaScript

### Navigation dynamique
```javascript
function navigateToPage(pageName)
```
Gère l'affichage des différentes pages sans rechargement.

### Menu mobile
Toggle du menu hamburger sur petits écrans avec fermeture automatique après sélection.

### Animations au scroll
Utilisation de l'**Intersection Observer API** pour animer l'apparition des cartes au scroll.

### Gestion des formulaires
- Validation native HTML5
- Messages d'alerte personnalisés
- Reset automatique après envoi

### Modal popup (Carrière)
- Ouverture/fermeture fluide avec animations
- Fermeture en cliquant à l'extérieur
- Formulaire de candidature intégré

---

## 📄 Pages du site

| Page | Description | Éléments clés |

| **Accueil** | Page d'atterrissage avec hero et présentation | Hero image, histoire, CTA |
| **Menu** | Carte complète du restaurant | Entrées, plats, desserts, menu découverte |
| **Réservation** | Formulaire de réservation de table | Formulaire, horaires, contact express |
| **Contact** | Coordonnées et formulaire de contact | Formulaire, adresse, carte, horaires |
| **Carrière** | Offres d'emploi et candidature | 4 offres, modal de candidature, avantages |

---

## 🎭 Contenu du menu

### Entrées (4 plats)
- Pastels de Poisson - 12€
- Salade de Quinoa aux Légumes (V) - 10€
- Crevettes Grillées - 16€
- Soupe de Courge (V) - 8€

### Plats principaux (4 plats)
- Thiéboudienne - 22€
- Yassa Poulet - 20€
- Mafé d'Agneau - 24€
- Thiéré Végétarien (V) - 18€

### Desserts (4 plats)
- Thiakry (V) - 8€
- Beignets de Banane (V) - 7€
- Mousse au Chocolat Baobab (V) - 9€
- Tarte à la Mangue (V) - 10€

### Menu Découverte
- 5 services - 45€ par personne
- Accord boissons africaines : +15€

---

## 💼 Offres d'emploi disponibles

1. **Serveur/Serveuse** - CDI - 1800-2200€
2. **Commis de Cuisine** - CDI - 1600-1900€
3. **Chef de Partie** - CDI (3-5 ans exp.) - 2500-3000€
4. **Responsable de Salle** - CDI (5+ ans exp.) - 2800-3500€

---

## 📞 Informations de contact du restaurant

- **Adresse** : 123 Rue de l'Afrique, 75018 Paris, France
- **Téléphone** : +33 1 23 45 67 89
- **Email** : contact@auxmilledelices.fr
- **Horaires** :
  - Lun - Ven : 12h-14h30 & 19h-22h30
  - Samedi : 19h-23h
  - Dimanche : Fermé

---

## 🐛 Problèmes connus et limitations

Aucun problème majeur identifié. Le site fonctionne correctement sur tous les navigateurs modernes.

### Améliorations futures possibles
- Intégration d'un backend pour gérer réellement les réservations
- Base de données pour stocker les candidatures
- Véritable intégration de Google Maps
- Système de paiement en ligne
- Galerie photos interactive
- Avis clients

---

## 🧪 Tests recommandés

### Tests fonctionnels
- ✅ Navigation entre toutes les pages
- ✅ Responsive sur mobile (375px), tablette (768px), desktop (1200px+)
- ✅ Formulaires de réservation et contact
- ✅ Menu hamburger sur mobile
- ✅ Modal de candidature (ouverture/fermeture)
- ✅ Animations au scroll

### Compatibilité navigateurs
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 👥 Auteur(s)

NJIKAM YOGWA NELSON  
LAURENT NGWE  
EDDY BRIAN   
ADEGOKE RAJI BILHAL  
DIABATE VAMOUSSA

Session : Automne 2025  
Projet de développement web

---

## 📝 Notes de développement

### Choix techniques
- **Pas de framework** : Code vanilla pour comprendre les fondamentaux
- **SPA simple** : Navigation fluide sans rechargement
- **Mobile-first** : Approche responsive dès la conception
- **Performance** : Images optimisées via Unsplash avec paramètres de qualité

### Points d'attention
- Les images proviennent d'Unsplash (URLs en ligne)
- Les formulaires utilisent `alert()` pour les confirmations (simulation)
- Le numéro de téléphone et l'adresse sont fictifs
- La carte Google Maps est un placeholder visuel

---

## 📜 Licence

Ce projet est réalisé dans un cadre éducatif.

---

## 🙏 Crédits

- **Images** : [Unsplash](https://unsplash.com)
- **Typographie** : Système par défaut (San Francisco, Segoe UI, Roboto)
- **Icônes** : Émojis Unicode natifs

---

## 📧 Support

Pour toute question concernant ce projet :
- Ouvrez une issue sur GitHub
- Contactez-moi par email : [votre.email@example.com]

---

**Version** : 1.0 Beta  
**Date** : Novembre 2024  
**Statut** : ✅ Prêt pour la démonstration
