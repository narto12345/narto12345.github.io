// Funcionalidad de marco
const marcoPresentation = document.getElementById("marco-presentation");
const buttonStart = document.getElementById("button-start");

try {
  buttonStart.addEventListener("click", () => {
    marcoPresentation.classList.add("ocultar");
    setTimeout(() => {
      marcoPresentation.classList.add("desaparecer");
    }, 1000);
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
}

// Funcionalidad de acordeón
const acordeon = document.getElementsByClassName("content-experience");

for (let i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", function () {
    this.classList.toggle("activa");
  });
}
