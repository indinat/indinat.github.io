# IndiNAT — Indicateurs Nationaux des Poissons Migrateurs

## Présentation du projet

IndiNAT est une plateforme web dédiée à la consultation d’indicateurs nationaux sur les poissons migrateurs amphihalins en France (saumon, aloses, lamproies, truite de mer, mulet porc, etc.).

Le site a été développé dans le cadre du **Plan National en faveur des Migrateurs Amphihalins (PNMA)** par les **Associations Migrateurs de France**, afin de centraliser et valoriser les données de suivi des populations à l’échelle nationale.

L’objectif principal du site est de proposer une interface claire et accessible permettant :

* de présenter le contexte du PNMA et du projet IndiNAT ;
* de consulter différents indicateurs biologiques et environnementaux ;
* d’accéder à des tableaux de bord interactifs Tableau Public ;
* de découvrir les différentes associations migrateurs françaises et leurs territoires d’action.

---

## Structure technique du site

Le projet repose sur une architecture web simple et légère composée de :

* **HTML5** pour la structure du site ;
* **CSS3** pour le design, les animations et le responsive mobile ;
* **JavaScript (Vanilla JS + jQuery)** pour les interactions dynamiques ;
* **Tableau Public** pour l’intégration des visualisations interactives ;
* **Bootstrap** et **Font Awesome** pour certains composants graphiques.

Le site est entièrement statique.

---

## Fonctionnalités principales

### Navigation fluide

Le site utilise un système de navigation par ancres avec scroll fluide permettant d’accéder rapidement aux différentes sections.

### Header dynamique

Un header fixe apparaît automatiquement lors du défilement afin de conserver un accès rapide au menu de navigation.

### Widget interactif des indicateurs

La section principale du site permet :

* de sélectionner une espèce ;
* de choisir un indicateur associé ;
* d’afficher dynamiquement un tableau de bord Tableau Public ;
* d’ouvrir les visualisations en plein écran ;
* d’afficher automatiquement l’image de l’espèce sélectionnée.

Toutes les données des indicateurs sont centralisées dans un objet JavaScript facilitant l’ajout futur de nouvelles espèces ou de nouveaux tableaux.

### Responsive design

Le site est entièrement responsive :

* menu burger sur mobile ;
* réorganisation automatique des blocs ;
* adaptation des tableaux et images ;
* optimisation de l’affichage tactile.

### Lightbox Mentions légales

Les mentions légales sont affichées dans une lightbox CSS/HTML sans dépendance externe.

---

## Organisation du projet

```bash
/
├── index.html      # Structure principale du site
├── style.css       # Styles et responsive design
├── script.js       # Interactions et logique dynamique
└── assets/         # Images, logos et ressources
```

---

## Dépendances externes

Le projet utilise plusieurs ressources externes :

* jQuery 3.1.0
* Bootstrap 3.3.5
* Font Awesome 4.4.0
* Google Fonts (Raleway)
* Tableau Public

---

## Hébergement

Le site est prévu pour être déployé sur tout hébergement statique compatible HTML/CSS/JS.

---

## Auteur / Maintenance

Projet développé pour les **Associations Migrateurs de France**.


# Structure du site :

```txt
indinat.github.io
│
├── index.html
│   │
│   ├── <head>
│   │   ├── Métadonnées SEO
│   │   │   ├── description
│   │   │   ├── keywords
│   │   │   ├── Open Graph
│   │   │   ├── Twitter Card
│   │   │   └── JSON-LD schema.org
│   │   │
│   │   ├── Favicon
│   │   ├── Bootstrap CSS
│   │   ├── Font Awesome
│   │   ├── Google Fonts (Raleway)
│   │   └── style.css
│   │
│   └── <body>
│       │
│       ├── <main>
│       │   │
│       │   ├── HEADER PRINCIPAL (.static-header)
│       │   │   ├── Bannière image
│       │   │   ├── Titre desktop
│       │   │   ├── Titre mobile
│       │   │   ├── Bloc introduction (.chapeau)
│       │   │   └── Navigation ancres
│       │   │       ├── #pnma
│       │   │       ├── #indinat
│       │   │       ├── #indicateurs
│       │   │       └── #pour-aller-plus-loin
│       │   │
│       │   ├── HEADER FIXE (.fixed-header)
│       │   │   ├── Logo
│       │   │   ├── Navigation desktop
│       │   │   └── Menu burger mobile
│       │   │       ├── Bouton burger
│       │   │       ├── Menu latéral mobile
│       │   │       └── Overlay
│       │   │
│       │   └── CONTENU PRINCIPAL (.container__content)
│       │       │
│       │       ├── SECTION 1 : PNMA (#pnma)
│       │       │   ├── Titre
│       │       │   ├── Paragraphes
│       │       │   ├── Listes à puces
│       │       │   ├── Image chronologie
│       │       │   └── Bouton téléchargement PDF
│       │       │
│       │       ├── SECTION 2 : Projet IndiNAT (#indinat)
│       │       │   ├── Texte descriptif
│       │       │   └── Bouton téléchargement rapport
│       │       │
│       │       ├── SECTION 3 : Indicateurs (#indicateurs)
│       │       │   │
│       │       │   ├── Boutons espèces
│       │       │   │   ├── Saumon
│       │       │   │   ├── Grande alose
│       │       │   │   ├── Alose feinte
│       │       │   │   ├── Alose agone
│       │       │   │   ├── Lamproie marine
│       │       │   │   ├── Truite de mer
│       │       │   │   └── Mulet porc
│       │       │   │
│       │       │   ├── Sélecteur indicateur (<select>)
│       │       │   ├── Image espèce dynamique
│       │       │   ├── Bouton plein écran
│       │       │   ├── Container Tableau Public
│       │       │   │   └── iframe dynamique
│       │       │   └── Lien Tableau Public
│       │       │
│       │       └── SECTION 4 : Pour aller plus loin (#pour-aller-plus-loin)
│       │           │
│       │           ├── Bloc présentation Associations Migrateurs
│       │           │   ├── Image carte
│       │           │   └── Texte descriptif
│       │           │
│       │           ├── Bloc missions associations
│       │           │   └── Liste à puces
│       │           │
│       │           ├── Bloc grille associations
│       │           │   │
│       │           │   ├── Bretagne Grands Migrateurs
│       │           │   ├── LOGRAMI
│       │           │   ├── MIGADO
│       │           │   ├── MIGRADOUR
│       │           │   ├── MRM
│       │           │   ├── R2M
│       │           │   └── SEINORMIGR
│       │           │
│       │           │   Chaque carte contient :
│       │           │   ├── Image/logo
│       │           │   ├── Overlay hover
│       │           │   ├── Réseaux sociaux
│       │           │   └── Site web
│       │           │
│       │           └── Bloc lien portail OFB
│       │
│       ├── FOOTER
│       │   ├── Texte financement OFB
│       │   ├── Logo OFB
│       │   ├── Copyright
│       │   └── Bouton Mentions légales
│       │
│       ├── LIGHTBOX Mentions légales
│       │   ├── Fenêtre modale
│       │   ├── Texte juridique
│       │   └── Bouton fermeture
│       │
│       ├── jQuery CDN
│       └── script.js
│
├── style.css
│   │
│   ├── RESET GLOBAL
│   │   ├── box-sizing
│   │   ├── marges
│   │   └── body flex
│   │
│   ├── HEADER
│   │   ├── Header statique
│   │   ├── Header fixe sticky
│   │   ├── Navigation desktop
│   │   └── Menu burger mobile
│   │
│   ├── TYPOGRAPHIE
│   │   ├── Titres
│   │   ├── Paragraphes
│   │   └── Chapeau
│   │
│   ├── CONTENU
│   │   ├── Container principal
│   │   ├── Sections
│   │   └── Mise en page grid/flex
│   │
│   ├── WIDGET INDICATEURS
│   │   ├── Boutons espèces
│   │   ├── Dropdown
│   │   ├── Image dynamique
│   │   ├── Tableau iframe
│   │   └── Liens Tableau Public
│   │
│   ├── GRILLE ASSOCIATIONS
│   │   ├── Cards
│   │   ├── Hover overlay
│   │   ├── Réseaux sociaux
│   │   └── Animations
│   │
│   ├── FOOTER
│   │   ├── Logos
│   │   ├── Copyright
│   │   └── Responsive footer
│   │
│   ├── LIGHTBOX
│   │   ├── Overlay
│   │   ├── Animation ouverture
│   │   ├── Bouton fermeture
│   │   └── Scroll contenu
│   │
│   ├── BOUTONS
│   │   ├── Téléchargement PDF
│   │   ├── Liens CTA
│   │   └── Hover effects
│   │
│   └── MEDIA QUERIES (mobile)
│       ├── Header mobile
│       ├── Menu burger
│       ├── Colonnes -> vertical
│       ├── Responsive widgets
│       ├── Footer mobile
│       └── Adaptation lightbox
│
└── script.js
    │
    ├── NAVIGATION FLUIDE
    │   ├── Smooth scroll ancres
    │   └── Compensation header fixe
    │
    ├── HEADER FIXE
    │   └── Apparition au scroll
    │
    ├── WIDGET INDICATEURS
    │   │
    │   ├── Base images espèces
    │   ├── Base dashboards Tableau Public
    │   ├── Variables DOM
    │   │
    │   ├── Fonctions utilitaires
    │   │   ├── setActiveButton()
    │   │   ├── findIndicator()
    │   │   └── updateImage()
    │   │
    │   ├── Génération boutons espèces
    │   ├── Construction dropdown
    │   ├── Gestion changement indicateur
    │   ├── Injection iframe Tableau
    │   ├── Gestion liens externes
    │   └── Initialisation widget
    │
    └── MENU BURGER MOBILE
        ├── Ouverture/Fermeture
        ├── Overlay
        ├── Animation burger
        └── Fermeture auto clic lien
```
