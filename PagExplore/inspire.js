// ===== Menu hambúrguer =====
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});



// ===== Filtro de categorias =====
const botoesFiltro = document.querySelectorAll(".categoria-filtros button");
const cards = document.querySelectorAll(".perfil-card");

botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    const categoria = botao.id.replace("-cat", "");

    cards.forEach(card => {
      if (card.dataset.categoria === categoria || categoria === "todos") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});