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

const contactLink = document.getElementById("contact-toggle"); // Obtiene el elemento contenedor del botón de contacto
const textEl = contactLink?.querySelector(".contact-text"); // Busca el elemento de texto interno (span) de forma segura

if (contactLink && textEl) { // Verifica que ambos elementos existan antes de ejecutar la lógica
  const email = "cesar@smartcareertools.com"; // Define la dirección de correo electrónico a utilizar
  let showingEmail = false; // Variable de estado: ¿Se está mostrando el email actualmente?
  let hintShown = false; // Variable de estado: ¿Ya se mostró la notificación de "Copiado"?

  contactLink.addEventListener("click", (e) => { // Agrega un escuchador para el evento 'click'
    e.preventDefault(); // Previene la acción por defecto del enlace (evita navegar o recargar)

    if (!showingEmail) { // Si NO se está mostrando el email (es decir, dice "Contacto")
      textEl.classList.add("is-fading"); // Agrega clase CSS para iniciar animación de desvanecimiento (fade out)

      setTimeout(() => { // Espera 200ms (tiempo que dura la transición CSS)
        textEl.textContent = email; // Cambia el texto visible por el email
        textEl.classList.remove("is-fading"); // Quita la clase para que el texto aparezca (fade in)
        showingEmail = true; // Actualiza el estado indicando que ahora se ve el email
      }, 150);

      return; // Sale de la función aquí para no ejecutar la lógica de copiado en el primer clic
    }

    navigator.clipboard.writeText(email); // Si ya se ve el email, copia el texto al portapapeles

    if (!hintShown) { // Si no se ha mostrado la notificación de copiado anteriormente
      hintShown = true; // Marca que la notificación ya se mostró (para no repetirla constantemente)
      contactLink.classList.add("show-hint"); // Agrega clase CSS que muestra el mensaje "Copiado"

      setTimeout(() => { // Configura un temporizador
        contactLink.classList.remove("show-hint"); // Oculta el mensaje después de 2.5 segundos
      }, 2500);
    }

    textEl.classList.add("is-fading"); // Inicia animación de desvanecimiento del email

    setTimeout(() => { // Espera 200ms
      textEl.textContent = "Contacto"; // Restaura el texto original "Contacto"
      textEl.classList.remove("is-fading"); // Quita la clase para que el texto aparezca
      showingEmail = false; // Restablece el estado a "no mostrando email"
    }, 150);
  });
}
