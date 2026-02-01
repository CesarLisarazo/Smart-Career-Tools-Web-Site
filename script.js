// Referencias a elementos
const hamburgerButton = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("menu-overlay");
const header = document.getElementById("header");

// Abre o cierra el menú
function toggleMenu() {
  mobileMenu.classList.toggle("open");
  overlay.classList.toggle("open");
  header.classList.toggle("menu-open");
  document.body.classList.toggle("menu-open");
}

// Cierra el menú (función centralizada)
function closeMenu() {
  mobileMenu.classList.remove("open");
  overlay.classList.remove("open");
  header.classList.remove("menu-open");
  document.body.classList.remove("menu-open");
}

// Click en el botón hamburguesa
hamburgerButton.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Click en el overlay → cierra
overlay.addEventListener("click", closeMenu);

// Click dentro del menú → cierra (UX esperada)
mobileMenu.addEventListener("click", closeMenu);
