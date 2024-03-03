// Funcionalidad de marco
const marcoPresentation = document.getElementById("marco-presentation");
const carouselMain = document.getElementById("carousel-main");
const buttonStart = document.getElementById("button-start");

try {
  buttonStart.addEventListener("click", () => {
    carouselMain.classList.remove("desaparecer");
    marcoPresentation.classList.add("ocultar");
    setTimeout(() => {
      marcoPresentation.classList.add("desaparecer");
      carouselMain.classList.add("carousel-p1");
    }, 700);
  });
} catch (ex) {
  console.log(ex);
}

/*Funcionalidades de inicio*/

// Funcionalidad para "Leer más"
const leerMas = document.getElementById("leer-mas");
const secondP = document.getElementById("second-p");
let mensaje = true;

try {
  leerMas.addEventListener("click", () => {
    secondP.classList.toggle("desaparecer");
    if (mensaje) {
      leerMas.innerText = "Ver menos";
      mensaje = false;
    } else {
      leerMas.innerText = "Ver más";
      mensaje = true;
    }
  });
} catch (ex) {
  console.log(ex);
}

// Funcionalidad para que al oprimir "Inicio" no se vuelva a presentar el marco
const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
let producto = urlParams.get("ocultar");

if (producto) {
  marcoPresentation.classList.add("desaparecer");
  carouselMain.classList.add("carousel-p1");
}

// Funcionalidad de acordeón en experiencias
const acordeon = document.getElementsByClassName("content-experience");

for (let i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", function (event) {
    event.stopPropagation();
    removeActiveExperiences(i);
    removeActiveProjectsAll();
    this.classList.toggle("activa");
  });
}

// Funcionalidad de acordeón en projectos de experiencias
const acordeonProjectsE = document.getElementsByClassName("project");

for (let i = 0; i < acordeonProjectsE.length; i++) {
  acordeonProjectsE[i].addEventListener("click", function (event) {
    event.stopPropagation();
    removeActiveProjects(i);
    this.classList.toggle("activa");
  });
}

function removeActiveProjects(j) {
  for (let i = 0; i < acordeonProjectsE.length; i++) {
    if (i != j) {
      acordeonProjectsE[i].classList.remove("activa");
    }
  }
}

function removeActiveProjectsAll() {
  for (let i = 0; i < acordeonProjectsE.length; i++) {
    acordeonProjectsE[i].classList.remove("activa");
  }
}

function removeActiveExperiences(j) {
  for (let i = 0; i < acordeon.length; i++) {
    if (i != j) {
      acordeon[i].classList.remove("activa");
    }
  }
}
