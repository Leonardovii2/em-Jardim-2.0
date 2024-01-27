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
