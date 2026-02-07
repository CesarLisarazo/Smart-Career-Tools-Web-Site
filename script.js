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

const descargasLink = document.getElementById("nav-pricing");
const emailInput = document.getElementById("email");

if (descargasLink && emailInput) {
  descargasLink.addEventListener("click", () => {
    // dejamos que el href="#form" haga su trabajo

    setTimeout(() => {
      emailInput.focus();
    }, 300);
  });
}

// manejamos el eevnto click del footer
const contactLink = document.getElementById("contact-toggle");

if (contactLink) {
  const email = "cesar@smartcareertools.com";
  let showingEmail = false;
  const duration = 200; // debe matchear el CSS

  contactLink.addEventListener("click", (e) => {
    e.preventDefault();

    contactLink.classList.add("is-fading");

    setTimeout(() => {
      if (!showingEmail) {
        contactLink.textContent = email;
      } else {
        contactLink.textContent = "Contacto";
      }

      showingEmail = !showingEmail;
      contactLink.classList.remove("is-fading");
    }, duration);
  });
}
