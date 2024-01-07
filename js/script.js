const marcoPresentation = document.getElementById("marco-presentation");
const buttonStart = document.getElementById("button-start");

buttonStart.addEventListener("click", () => {
  marcoPresentation.classList.add("ocultar");
  setTimeout(() => {
    marcoPresentation.classList.add("desaparecer");
  }, 1000);
});
