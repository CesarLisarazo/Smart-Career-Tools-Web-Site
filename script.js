// ================= MENU =================

const hamburgerButton = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("menu-overlay");

function openMenu() {
  mobileMenu.classList.add("open");
  overlay.classList.add("open");
  document.body.classList.add("menu-open");
  hamburgerButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  mobileMenu.classList.remove("open");
  overlay.classList.remove("open");
  document.body.classList.remove("menu-open");
  hamburgerButton.setAttribute("aria-expanded", "false");
}

hamburgerButton.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.contains("open") ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);

mobileMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") closeMenu();
});

// ================= CONTACT TOGGLE =================

const contactLink = document.getElementById("contact-toggle");
const textEl = contactLink?.querySelector(".contact-text");

if (contactLink && textEl) {
  const email = "cesar@smartcareertools.com";
  let showingEmail = false;
  let hintShown = false;

  contactLink.addEventListener("click", (e) => {
    e.preventDefault();

    if (!showingEmail) {
      textEl.classList.add("is-fading");

      setTimeout(() => {
        textEl.textContent = email;
        textEl.classList.remove("is-fading");
        showingEmail = true;
      }, 400);

      return;
    }

    navigator.clipboard.writeText(email);

    if (!hintShown) {
      hintShown = true;
      contactLink.classList.add("show-hint");

      setTimeout(() => {
        contactLink.classList.remove("show-hint");
      }, 2500);
    }

    textEl.classList.add("is-fading");

    setTimeout(() => {
      textEl.textContent = "Contacto";
      textEl.classList.remove("is-fading");
      showingEmail = false;
    }, 400);
  });
}
