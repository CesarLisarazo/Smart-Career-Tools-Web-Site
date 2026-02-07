// ================= MENU =================

const hamburgerButton = document.getElementById("hamburger-button"); // Obtiene el botón de menú hamburguesa por su ID
const mobileMenu = document.getElementById("mobile-menu"); // Obtiene el contenedor del menú móvil
const overlay = document.getElementById("menu-overlay"); // Obtiene la capa de fondo oscuro (overlay)

function openMenu() { // Función para abrir el menú
  mobileMenu.classList.add("open"); // Agrega la clase 'open' al menú para mostrarlo
  overlay.classList.add("open"); // Agrega la clase 'open' al overlay para mostrarlo
  document.body.classList.add("menu-open"); // Bloquea el scroll del body agregando una clase
  hamburgerButton.setAttribute("aria-expanded", "true"); // Actualiza el atributo de accesibilidad para indicar que está expandido
}

function closeMenu() { // Función para cerrar el menú
  mobileMenu.classList.remove("open"); // Quita la clase 'open' del menú para ocultarlo
  overlay.classList.remove("open"); // Quita la clase 'open' del overlay
  document.body.classList.remove("menu-open"); // Restaura el scroll del body quitando la clase
  hamburgerButton.setAttribute("aria-expanded", "false"); // Actualiza el atributo de accesibilidad para indicar que está colapsado
}

hamburgerButton.addEventListener("click", (e) => { // Escucha el evento click en el botón hamburguesa
  e.stopPropagation(); // Evita que el evento se propague a otros elementos
  mobileMenu.classList.contains("open") ? closeMenu() : openMenu(); // Alterna entre abrir y cerrar dependiendo si ya tiene la clase 'open'
});

overlay.addEventListener("click", closeMenu); // Cierra el menú si se hace click en el fondo oscuro (overlay)

mobileMenu.addEventListener("click", (e) => { // Escucha clicks dentro del menú móvil
  if (e.target.tagName === "A") closeMenu(); // Si el elemento clickeado es un enlace (<a>), cierra el menú
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
