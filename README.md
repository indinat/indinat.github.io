![IndiNAT](assets/banniere-AM.png)

# Indicateurs Nationaux des Poissons Migrateurs

Accès au site web : [indinat.github.io](https://indinat.github.io)

<details>
<summary><strong>📑 Table des matières</strong></summary>

<br>

- [Présentation du projet](#présentation-du-projet)
- [Structure technique du site](#structure-technique-du-site)
- [Fonctionnalités principales](#fonctionnalités-principales)
  - [Navigation fluide](#navigation-fluide)
  - [Header dynamique](#header-dynamique)
  - [Widget interactif des indicateurs](#widget-interactif-des-indicateurs)
  - [Responsive design](#responsive-design)
  - [Lightbox Mentions légales](#lightbox-mentions-légales)
- [Organisation du projet](#organisation-du-projet)
- [Dépendances externes](#dépendances-externes)
- [Hébergement](#hébergement)
- [Maintenance](#maintenance)
  - [Principe général](#principe-général)
  - [Gestion des images d'espèces](#gestion-des-images-despèces)
  - [Gestion des indicateurs](#gestion-des-indicateurs)
    - [ID indicateur](#id-indicateur)
  - [Liens générés automatiquement](#liens-générés-automatiquement)
  - [Bonnes pratiques lors des modifications](#bonnes-pratiques-lors-des-modifications)
- [Auteur](#auteur)
- [Structure détaillée du site](#structure-détaillée-du-site)

</details>

### Présentation du projet

IndiNAT est une plateforme web dédiée à la consultation d’indicateurs nationaux sur l’état des populations des poissons migrateurs amphihalins en France.

Le site a été développé dans le cadre du **Plan National en faveur des Migrateurs Amphihalins (PNMA)** par les **Associations Migrateurs de France**, afin de centraliser et valoriser les données de suivi des populations à l’échelle nationale.

L’objectif principal du site est de proposer une interface claire et accessible permettant :

- de présenter le contexte du PNMA et le projet IndiNAT ;
- de consulter des tableaux de bord interactifs ;
- d’accéder à différents indicateurs nationaux et locaux d’état des populations ;
- de découvrir les associations migrateurs françaises et leurs territoires d’action.

---

## Structure technique du site

Le projet repose sur une architecture web simple et légère composée de :

- **HTML5** pour la structure du site ;
- **CSS3** pour le design, les animations et le responsive ;
- **JavaScript (Vanilla JS + jQuery)** pour les interactions dynamiques ;
- **Tableau Public** pour l’intégration des visualisations interactives ;
- **Bootstrap** et **Font Awesome** pour certains composants graphiques.

Le site est entièrement statique.

---

## Fonctionnalités principales

### Navigation fluide

Le site utilise un système de navigation par ancres avec défilement fluide permettant d’accéder rapidement aux différentes sections.

### Header dynamique

Un header fixe apparaît automatiquement lors du défilement afin de conserver un accès rapide au menu de navigation.

### Widget interactif de visualisation des indicateurs

La section principale du site permet :

- de sélectionner une espèce ;
- de choisir un indicateur associé ;
- d’afficher dynamiquement un tableau de bord Tableau Public ;
- d’ouvrir les visualisations en plein écran ;
- d’afficher automatiquement l’image de l’espèce sélectionnée.

Toutes les données des indicateurs sont centralisées dans un objet JavaScript facilitant l’ajout futur de nouvelles espèces ou de nouveaux tableaux.

### Responsive design

Le site est entièrement responsive :

- menu burger sur mobile ;
- réorganisation automatique des blocs ;
- adaptation des tableaux et images ;
- optimisation de l’affichage tactile.

### Lightbox Mentions légales

Les mentions légales sont affichées dans une lightbox HTML / CSS sans dépendance externe.

---

## Organisation du projet

```text
/
├── index.html      # Structure principale du site
├── style.css       # Styles et responsive design
├── script.js       # Interactions et logique dynamique
└── assets/         # Images, logos et ressources
```

---

## Dépendances externes

Le projet utilise plusieurs ressources externes :

- jQuery 3.1.0
- Bootstrap 3.3.5
- Font Awesome 4.4.0
- Google Fonts (Raleway)
- Tableau Public

---

## Hébergement

Le site peut être déployé sur tout hébergement compatible HTML / CSS / JavaScript. Aucune base de données n'est nécessaire, seul un espace serveur est requis. Le site fonctionne actuellement avec GitHub Pages. Pour se faire il faut créer un dépôt. Entrez `username.github.io` comme nom du dépôt, remplacez `username` par votre nom d’utilisateur GitHub. Par exemple ici, le nom d’utilisateur est `indinat`, le nom du dépôt doit donc être `indinat.github.io`. A partir de là, il suffit d'uploader le contenu du site dans le dépôt. Quelques minutes plus tard, le site web sera automatquement déployé et accessible via l'url `indinat.github.io` / `https://indinat.github.io`.

---

## Maintenance

### Principe général

Le site ne dispose d'aucune interface d’administration (back-office).

Il s'agit d'un site web statique dont le contenu est directement intégré dans les fichiers sources. Toute modification nécessite donc une intervention manuelle dans les fichiers :

- `index.html`
- `style.css`
- `script.js`

Les fichiers sont bien structurés et annotés mais leur maintenance nécessite des connaissances de base des langages HTML / CSS / JavaScript.

Le widget de visualisation des indicateurs est essentiellement géré via JavaScript, ses élements HTML sont automatisés.

---

### Mise à jour des ressources internes

Pour changer une image, un logo ou un document déjà éxistant sur le site (changement de version), il faut supprimer l'élément en question du dossier `assets` et importer la nouvelle version à la place. La nouvelle version doit impérativement porter le même nom et extension que l'ancienne afin que le lien contenu dans le fichier `index.html` reste fonctionnel.

---

### Gestion des images d'espèces

Les images affichées dans le widget de visualisation des indicateurs sont définies dans l'objet JavaScript :

```js
const speciesImages = {
  "NOM DE L'ESPECE": "URL DE L'IMAGE",
  "NOM DE L'ESPECE": "URL DE L'IMAGE",
  "NOM DE L'ESPECE": "URL DE L'IMAGE",
  etc...
};
```
Il est possible d'ajouter une image et de modifier ou supprimer une image existante en ajoutant, modifiant ou supprimant l'entrée correspondante dans cet objet. Les entrées doivent être séparées par une `,` (sauf après la dernière entrée). Remplacer `NOM DE L'ESPECE` et `URL DE L'IMAGE`.

---

### Gestion des indicateurs

Les indicateurs disponibles pour chaque espèce sont définis dans l'objet JavaScript :

```js
const data = {
  "NOM DE L'ESPECE 1": {

    "INTITULE DE L'INDICATEUR 1": `
      <div class="tableau-wrapper">
        <iframe
          src="https://public.tableau.com/views/ID DU TABLEAU PUBLIC DE L'INDICATEUR 1/TB?:showVizHome=no"
          class="tableau-frame">
        </iframe>
      </div>`,

    "INTITULE DE L'INDICATEUR 2": `
      <div class="tableau-wrapper">
        <iframe
          src="https://public.tableau.com/views/ID DU TABLEAU PUBLIC DE L'INDICATEUR 2/TB?:showVizHome=no"
          class="tableau-frame">
        </iframe>
      </div>`

    etc...
  },
"NOM DE L'ESPECE 2": {

    "INTITULE DE L'INDICATEUR 1": `
      <div class="tableau-wrapper">
        <iframe
          src="https://public.tableau.com/views/ID DU TABLEAU PUBLIC DE L'INDICATEUR 1/TB?:showVizHome=no"
          class="tableau-frame">
        </iframe>
      </div>`,

    "INTITULE DE L'INDICATEUR 2": `
      <div class="tableau-wrapper">
        <iframe
          src="https://public.tableau.com/views/ID DU TABLEAU PUBLIC DE L'INDICATEUR 2/TB?:showVizHome=no"
          class="tableau-frame">
        </iframe>
      </div>`

     etc...
  },
  etc...
};
```

Il est possible d'ajouter un indicateur et de modifier ou supprimer un indicateur existant en ajoutant, modifiant ou supprimant l'entrée correspondante dans cet objet. Les entrées doivent être séparées par une `,` (sauf après la dernière entrée). Remplacer `NOM DE L'ESPECE #`, `INTITULE DE L'INDICATEUR #` et `ID DU TABLEAU PUBLIC DE L'INDICATEUR #`.

#### ID indicateur

L'identifiant Tableau Public d'un indicateur est renseigné dans son code d'intégration Tableau Public. Il se trouve notament dans la valeur de la balise paramétrique `<param/>` du nom 'name' localisée à la 5ème ligne :

Exemple d'un code d'intégration Tableau Public :
```html
<div class='tableauPlaceholder' id='viz1767793437879' style='position: relative'><noscript><a href='#'><img alt='TB ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;SA&#47;SATTACONS2024&#47;TB&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' style='display:none;'>
    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
    <param name='embed_code_version' value='3' />
    <param name='site_root' value='' />
    <param name='name' value='SATTACONS2024&#47;TB' />   <!-- Ligne contenant l'information ID DE l'INDICATEUR, renseigné après "value=" (seulement les caractères avant "&"). Exemple ici = SATTACONS2024 -->
    <param name='tabs' value='no' />
    <param name='toolbar' value='yes' />
    <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;SA&#47;SATTACONS2024&#47;TB&#47;1.png' />
    <param name='animate_transition' value='yes' />
    <param name='display_static_image' value='yes' />
    <param name='display_spinner' value='yes' />
    <param name='display_overlay' value='yes' />
    <param name='display_count' value='yes' />
    <param name='language' value='fr-FR' />
  </object></div>
<script type='text/javascript'>
  var divElement = document.getElementById('viz1767793437879');
  var vizElement = divElement.getElementsByTagName('object')[0];
  if (divElement.offsetWidth > 800) {
    vizElement.style.width = '1169px';
    vizElement.style.height = '1681px';
  } else if (divElement.offsetWidth > 500) {
    vizElement.style.width = '1169px';
    vizElement.style.height = '1681px';
  } else {
    vizElement.style.width = '100%';
    vizElement.style.height = '3427px';
  }
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>
```
La ligne contenant l'indicateur est `<param name='name' value='SATTACONS2024&#47;TB' />`. L'ID indicateur est renseigné après `value=` (seulement les caractères avant `&`). Exemple ici = `SATTACONS2024`.

---

### Liens générés automatiquement

Les liens sont générés automatiquement à partir de l’URL renseignée dans l’élément `<iframe>` :

- **Ouvrir en plein écran** (exploitation directe de l'url contenue dans l'iframe)
- **Ouvrir dans Tableau Public** (modfication automatique du paramètre de requête de l'url contenue dans l'iframe pour `:origin=viz_share_link`)


Aucune modification supplémentaire n’est donc nécessaire pour ces fonctionnalités.

---

### Bonnes pratiques lors des modifications

Après chaque modification, il est recommandé de vérifier :

1. la validité des URL Tableau Public ;
2. l’accessibilité des images ;
3. le bon fonctionnement du widget ;
4. l’affichage sur ordinateur et mobile ;
5. les liens externes générés automatiquement.

---

## Auteur

Projet développé pour les **Associations Migrateurs de France** :

- Bretagne Grands Migrateurs (BGM)
- Loire Grands Migrateurs (LOGRAMI)
- Migrateurs Garonne Dordogne Charente Seudre (MIGADO)
- Migrateurs Adour (MIGRADOUR)
- Migrateurs Rhône Méditerranée (MRM)
- Rhin Meuse Migrateurs (R2M)
- Seine Normandie Migrateurs (SEINORMIGR)

---

## Structure détaillée du site

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
│       │   ├── Texte financement
│       │   ├── Logo financement
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


© Associations Migrateurs de France - 2026
