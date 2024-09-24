

function showContactInfo() {
    document.getElementById("contact-info").style.display = "block";
}

function closeContactInfo() {
    document.getElementById("contact-info").style.display = "none";
}

// Mostrar el botón de "Volver al inicio" al hacer scroll
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Mostrar el botón
    } else {
        scrollToTopBtn.style.display = "none"; // Ocultar el botón
    }
};

// Desplazar hacia arriba suavemente al hacer clic
document.getElementById("scrollToTop").onclick = function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
    });
};


