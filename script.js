$(document).ready(function () {
  $('a[href^="#"]')
    .not('[href="#image1"]')
    .not('[href="#!"]')
    .not('[data-role="open-tableau"]')
    .on("click", function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top - $(".fixed-header").outerHeight()
          },
          900,
          "swing",
          function () {
            history.replaceState(null, null, target);
          }
        );
    });
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $(".fixed-header").slideDown();
  } else {
    $(".fixed-header").slideUp();
  }
});

// Début du widget de visualisation des indicateurs

// ======================
// IMAGES DES ESPÈCES
// ======================

const speciesImages = {
  "Saumon": "https://seinormigr-barault.github.io/assets/SAT.png?max=400",
  "Grande alose": "https://seinormigr-barault.github.io/assets/ALA.png?max=400",
  "Alose feinte": "https://seinormigr-barault.github.io/assets/ALF.png?max=400",
  "Alose agone": "https://seinormigr-barault.github.io/assets/ALF.png?max=400",
  "Lamproie marine": "https://seinormigr-barault.github.io/assets/LPM.png?max=400",
  "Truite de mer": "https://seinormigr-barault.github.io/assets/TRM.png?max=400",
  "Mulet porc": "https://seinormigr-barault.github.io/assets/MUP.png?max=400"
};

// ======================
// DATA TABLEAU (iframe)
// ======================

const data = {
  "Saumon": {
    "Effectifs de géniteurs potentiels de Saumon aux stations de comptage des migrations": `
      <div class="tableau-wrapper">
        <iframe src="https://public.tableau.com/views/SATSTACOMI2024/TB?:showVizHome=no"
          class="tableau-frame"></iframe>
      </div>`,

    "Production naturelle de juvéniles de Saumon (tacons 0+)": `
      <div class="tableau-wrapper">
        <iframe src="https://public.tableau.com/views/SATTACONS2024/TB?:showVizHome=no"
          class="tableau-frame"></iframe>
      </div>`
  },

  "Grande alose": {
    "Effectifs de géniteurs potentiels de Grandes aloses aux stations de comptage des migrations": `
      <div class="tableau-wrapper">
        <iframe src="https://public.tableau.com/views/ALASTACOMI2024/TB?:showVizHome=no"
          class="tableau-frame"></iframe>
      </div>`
  },

  "Alose feinte": {
    "Indice de l’activité de reproduction des Aloses feintes": `
      <div class="tableau-wrapper">
        <iframe src="https://public.tableau.com/views/ALFREPRO2024/TB?:showVizHome=no"
          class="tableau-frame"></iframe>
      </div>`
  },

  "Alose agone": {
    "Indice de l’activité de reproduction des Aloses agones": `
      <div class="tableau-wrapper">
        <iframe src="https://public.tableau.com/views/ALGREPRO2024/TB?:showVizHome=no"
          class="tableau-frame"></iframe>
      </div>`
  },

  "Lamproie marine": {
    "Effectifs de géniteurs potentiels de Lamproies marines aux stations de comptage des migrations": `
      <div class="tableau-wrapper">
        <iframe src="https://public.tableau.com/views/LPMSTACOMI2024/TB?:showVizHome=no"
          class="tableau-frame"></iframe>
      </div>`,

    "Indice de l’activité de reproduction des Lamproies marines": `
      <div class="tableau-wrapper">
        <iframe src="https://public.tableau.com/views/LPMREPRO2024/TB?:showVizHome=no"
          class="tableau-frame"></iframe>
      </div>`
  },

  "Truite de mer": {
    "Effectifs de géniteurs potentiels de Truites de mer aux stations de comptage des migrations": `
      <div class="tableau-wrapper">
        <iframe src="https://public.tableau.com/views/TRMSTACOMI2024/TB?:showVizHome=no"
          class="tableau-frame"></iframe>
      </div>`
  },

  "Mulet porc": {
    "Effectifs de Mulets porcs aux stations de comptage des migrations": `
      <div class="tableau-wrapper">
        <iframe src="https://public.tableau.com/views/MUPSTACOMI2024/TB?:showVizHome=no"
          class="tableau-frame"></iframe>
      </div>`
  }
};

// ======================
// VARIABLES DOM
// ======================

let currentSpecies = null;

const btnContainer = document.getElementById("species-buttons");
const select = document.getElementById("indicator-select");
const tableau = document.getElementById("tableau-container");
const speciesImage = document.getElementById("species-image");

const tableauLink = document.querySelector(".lien-TB");
const fullScreenLink = document.querySelector(".lien-full-screen");

// ======================
// OUTILS
// ======================

function setActiveButton(species) {
  document.querySelectorAll(".species-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.textContent === species);
  });
}

function findIndicator(indicator) {
  for (const species in data) {
    if (data[species][indicator]) {
      return {
        species,
        html: data[species][indicator]
      };
    }
  }
  return null;
}

// ======================
// IMAGE
// ======================

function updateImage() {
  speciesImage.innerHTML =
    currentSpecies && speciesImages[currentSpecies]
      ? `<img src="${speciesImages[currentSpecies]}" alt="${currentSpecies}">`
      : "";
}

// ======================
// BOUTONS ESPÈCES
// ======================

Object.keys(data).forEach((species) => {
  const btn = document.createElement("button");

  btn.className = "species-btn";
  btn.textContent = species;

  btn.addEventListener("click", () => {
    currentSpecies = currentSpecies === species ? null : species;

    setActiveButton(currentSpecies);
    buildDropdown();
    updateImage();
  });

  btnContainer.appendChild(btn);
});

// ======================
// DROPDOWN
// ======================

function buildDropdown(selectedIndicator = null) {
  select.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.textContent = "Choisir une espèce et un indicateur";
  placeholder.value = "";
  placeholder.disabled = true;
  placeholder.hidden = true;
  placeholder.selected = !selectedIndicator;

  select.appendChild(placeholder);

  (currentSpecies ? [currentSpecies] : Object.keys(data)).forEach((species) => {
    Object.keys(data[species]).forEach((indicator) => {
      const option = document.createElement("option");
      option.value = indicator;
      option.textContent = indicator;
      select.appendChild(option);
    });
  });

  if (selectedIndicator) {
    select.value = selectedIndicator;
  }
}

// ======================
// CHANGEMENT INDICATEUR
// ======================

select.addEventListener("change", function () {
  const indicator = this.value;

  if (!indicator) return;

  const result = findIndicator(indicator);

  if (!result) return;

  currentSpecies = result.species;

  setActiveButton(currentSpecies);
  updateImage();

  tableau.innerHTML = result.html;

  const iframe = tableau.querySelector("iframe");

  if (iframe) {
    // bouton "Mode plein écran"
    fullScreenLink.href = iframe.src;
    fullScreenLink.target = "_blank";
    fullScreenLink.classList.add("active");

    // bouton "Ouvrir dans Tableau Public"
    tableauLink.href = iframe.src.split("?")[0] + "?:origin=viz_share_link";

    tableauLink.target = "_blank";
  } else {
    fullScreenLink.href = "#indicateurs";
    fullScreenLink.target = "_self";
    fullScreenLink.classList.remove("active");

    tableauLink.href = "#indicateurs";
    tableauLink.target = "_self";
  }

  buildDropdown(indicator);
});

// ======================
// INIT
// ======================

buildDropdown();

// Fin du widget de visualisation des indicteurs

// Début menu burger
$(".burger, .overlay").click(function () {
  $(".burger").toggleClass("clicked");
  $(".overlay").toggleClass("show");
  $(".menu-mobile").toggleClass("show");
  $("body").toggleClass("overflow");
});

// Fermeture du menu au clic sur un lien
$(".menu-mobile a").click(function () {
  $(".burger").removeClass("clicked");
  $(".overlay").removeClass("show");
  $(".menu-mobile").removeClass("show");
  $("body").removeClass("overflow");
});
// Fin menu burger
