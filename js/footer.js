// navbar.js
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("footer");

  // Carrega a barra de navegação
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      footer.innerHTML = data;
    });
});
