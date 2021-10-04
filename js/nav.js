//seccion del header alto
let header = document.getElementById("header");
let navbar = document.getElementById("navbar");
let nombre = document.getElementById("nombre");
let menu = document.getElementById("menu");
let boton = document.getElementById("botonMenu");

//secciones
let seccionSobreMi = document.getElementById("collapseOne");
let seccionHabilidades = document.getElementById("collapseTwo");
let seccionPortfolio = document.getElementById("collapseThree");
let seccionContacto = document.getElementById("collapseFour");
let secciones = [
  seccionSobreMi,
  seccionHabilidades,
  seccionPortfolio,
  seccionContacto,
];

//seccion del header bajo
let headerBajo = document.getElementById("HeaderBajo");
let inicioMenuBajo = document.getElementById("MenuInicioBajo");
let sobreMiBajo = document.getElementById("sobreMiInicioBajo");
let habilidadesBajo = document.getElementById("habilidadInicioBajo");
let portfolioBajo = document.getElementById("portfolioInicioBajo");
let contactoBajo = document.getElementById("contactoInicioBajo");

let elementosMenuBajo = [
  sobreMiBajo,
  habilidadesBajo,
  portfolioBajo,
  contactoBajo,
  sobreMiBajo,
  habilidadesBajo,
  portfolioBajo,
  contactoBajo,
];



boton.addEventListener("click", () => {
  if (menu.classList.contains("show") == false) {
    menu.classList.add("show");
  } else {
    menu.classList.remove("show");
  }
});
inicioMenuBajo.addEventListener("click", () => {
  header.classList.remove("header-top");
  inicioMenuBajo.classList.add("active");
  sobreMiBajo.classList.remove("active");
  habilidadesBajo.classList.remove("active");
  portfolioBajo.classList.remove("active");
  contactoBajo.classList.remove("active");
  console.log(window.innerWidth);
  for (let i = 0; i < secciones.length; i++) {
    secciones[i].classList.remove("show");
  }
});

for (let i = 0; i < secciones.length; i++) {
  elementosMenuBajo[i].addEventListener("click", () => {
    switch (secciones[i]) {
      case seccionSobreMi:
        if (seccionSobreMi.classList.contains("show") == false) {
          seccionSobreMi.classList.add("show");
          seccionHabilidades.classList.remove("show");
          seccionPortfolio.classList.remove("show");
          seccionContacto.classList.remove("show");

          // agregando el active a la seccion correspondiente
          sobreMiBajo.classList.add("active");
          // quitando el active de los menus
          inicioMenuBajo.classList.remove("active");
          habilidadesBajo.classList.remove("active");
          portfolioBajo.classList.remove("active");
          contactoBajo.classList.remove("active");
          menu.classList.remove("show");
        }
        break;
      case seccionHabilidades:
        if (seccionHabilidades.classList.contains("show") == false) {
          seccionSobreMi.classList.remove("show");
          seccionHabilidades.classList.add("show");
          seccionPortfolio.classList.remove("show");
          seccionContacto.classList.remove("show");

          // agregando el active a la seccion correspondiente
          habilidadesBajo.classList.add("active");
          // quitando el active de los menus
          inicioMenuBajo.classList.remove("active");
          sobreMiBajo.classList.remove("active");
          portfolioBajo.classList.remove("active");
          contactoBajo.classList.remove("active");
          menu.classList.remove("show");
        }
        break;
      case seccionPortfolio:
        if (seccionPortfolio.classList.contains("show") == false) {
          seccionSobreMi.classList.remove("show");
          seccionHabilidades.classList.remove("show");
          seccionPortfolio.classList.add("show");
          seccionContacto.classList.remove("show");

          // agregando el active a la seccion correspondiente
          portfolioBajo.classList.add("active");
          // quitando el active de los menus
          inicioMenuBajo.classList.remove("active");
          habilidadesBajo.classList.remove("active");
          sobreMiBajo.classList.remove("active");
          contactoBajo.classList.remove("active");
          menu.classList.remove("show");
        }
        break;
      case seccionContacto:
        if (seccionContacto.classList.contains("show") == false) {
          seccionSobreMi.classList.remove("show");
          seccionHabilidades.classList.remove("show");
          seccionPortfolio.classList.remove("show");
          seccionContacto.classList.add("show");

          // agregando el active a la seccion correspondiente
          contactoBajo.classList.add("active");
          // quitando el active de los menus
          inicioMenuBajo.classList.remove("active");
          habilidadesBajo.classList.remove("active");
          sobreMiBajo.classList.remove("active");
          portfolioBajo.classList.remove("active");
          menu.classList.remove("show");

        }
        break;

      default:
        break;
    }
    header.classList.add("header-top");
  });
}

const mensaje = document.getElementById("textarea");

// contador del textarea
const contador = document.getElementById("contador");

mensaje.addEventListener("input", function (e) {
  const target = e.target;
  const longitudMax = target.getAttribute("maxlength");
  const longitudAct = target.value.length;
  contador.innerHTML = `${longitudAct}/${longitudMax}`;
});
