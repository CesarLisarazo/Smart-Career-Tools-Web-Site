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
const textEl = contactLink?.querySelector(".contact-text");

if (contactLink && textEl) {
  const email = "cesar@smartcareertools.com";
  let showingEmail = false;
  let hintShownOnce = false;

  contactLink.addEventListener("click", (e) => {
    e.preventDefault();

    // 1️⃣ Mostrar email
    if (!showingEmail) {
      textEl.classList.add("is-fading");

      setTimeout(() => {
        textEl.textContent = email;
        textEl.classList.remove("is-fading");
        showingEmail = true;
      }, 200);

      return;
    }

    // 2️⃣ Copiar
    navigator.clipboard.writeText(email);

    // 3️⃣ Hint (una sola vez)
    if (!hintShownOnce) {
      hintShownOnce = true;
      contactLink.classList.add("show-hint");

      setTimeout(() => {
        contactLink.classList.remove("show-hint");
      }, 2300);
    }

    // 4️⃣ Volver a "Contacto" con animación
    textEl.classList.add("is-fading");

    setTimeout(() => {
      textEl.textContent = "Contacto";
      textEl.classList.remove("is-fading");
      showingEmail = false;
    }, 200);
  });
}
