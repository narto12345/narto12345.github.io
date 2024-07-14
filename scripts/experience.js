const experiences = document.getElementsByClassName("experience");
const experiencesheads = document.getElementsByClassName("experience-head");
const experiencesBodies = document.getElementsByClassName("experience-body");

for (let i = 0; i < experiences.length; i++) {
  experiences[i].addEventListener("click", function (event) {
    reiniciarAcordeones(i);
    experiencesheads[i].classList.toggle("texto-centrado");
    experiencesBodies[i].classList.toggle("experience-body-activo");
    experiences[i].classList.toggle("activo");

    if (experiences[i].classList.contains("activo")) {
      const contentHeight = experiencesBodies[i].scrollHeight;
      console.log("contentHeight: " + contentHeight);
      experiencesBodies[i].style.height = contentHeight + "px";
    } else {
      experiencesBodies[i].style.height = "0";
    }
  });
}

function reiniciarAcordeones(acordeonAEvitar) {
  for (let i = 0; i < experiences.length; i++) {
    if (i !== acordeonAEvitar) {
      experiencesheads[i].classList.add("texto-centrado");
      experiencesBodies[i].classList.remove("experience-body-activo");
      experiencesBodies[i].style.height = "0";
      experiences[i].classList.remove("activo");
    }
  }
}
