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

// Funcionalidad de acordeón
const acordeon = document.getElementsByClassName("content-experience");

for (let i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", function () {
    this.classList.toggle("activa");
  });
}

const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
let producto = urlParams.get("ocultar");

if (producto) {
  marcoPresentation.classList.add("desaparecer");
}
