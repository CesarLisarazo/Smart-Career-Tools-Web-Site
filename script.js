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

// manejamos el evento click del footer
const contactLink = document.getElementById("contact-toggle");
const textSpan = contactLink?.querySelector(".contact-text");

if (contactLink && textSpan) {
  const email = "cesar@smartcareertools.com";
  let showingEmail = false;
  const fadeDuration = 200;

  contactLink.addEventListener("click", (e) => {
    e.preventDefault();

    // MOSTRAR EMAIL
    if (!showingEmail) {
      textSpan.classList.add("is-fading");

      setTimeout(() => {
        textSpan.textContent = email;
        showingEmail = true;
        textSpan.classList.remove("is-fading");
        contactLink.classList.add("is-email");
      }, fadeDuration);

      return;
    }

    // EMAIL → COPIAR + FEEDBACK EN PARALELO
    navigator.clipboard.writeText(email).catch(() => {});

    contactLink.classList.add("show-hint");
    textSpan.classList.add("is-fading");

    setTimeout(() => {
      textSpan.textContent = "Contacto";
      showingEmail = false;
      textSpan.classList.remove("is-fading");
      contactLink.classList.remove("is-email");
    }, fadeDuration);

    setTimeout(() => {
      contactLink.classList.remove("show-hint");
    }, 900);
  });
}

