// navbar.js
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");

  // Carrega a barra de navegação
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      navbar.innerHTML = data;
    });
});

function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");

  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "./src/assets/image/cardapio.png";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "./src/assets/image/perto.png";
  }
}
