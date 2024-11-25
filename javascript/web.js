

/**
 * Parte del formulario de contacto. Usamos EmailJS
 */
document.getElementById('formulario_contacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Usa emailjs para enviar el correo
    emailjs.send("service_qan67jb", "template_roha2tn", {
       nombre: nombre,
       email: email,
       mensaje: mensaje
    })
    .then(function(response) {
       console.log('Correo enviado con éxito', response.status, response.text);
       alert('Tu mensaje ha sido enviado.');
    });
 });
 (function(){
    emailjs.init("yLwjmsrntPMn-N4N6"); // Coloca aquí tu User ID
 })();
 
 function toggleMenu() {
   const menu = document.getElementById('nav-mobile');
   menu.classList.toggle('open');
}


   // Contenido en inglés y español
   const content = {
    es: {
        navInicio: "Inicio",
        navActriz: "Actriz",
        navClown: "Clown",
        navEspectaculos: "Espectáculos",
        navEducacion: "Educación",
        navContacto: "Contacto",
        footer: "© Cristina Graos. Todos los derechos reservados."
    },
    en: {
        titulo: "CRISTINA GRAOS",
        navInicio: "Home",
        navActriz: "Actress",
        navClown: "Clown",
        navEspectaculos: "Shows",
        navEducacion: "Education",
        navContacto: "Contact",
        footer: "© Cristina Graos. All rights reserved."
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {

    // Cambiar los enlaces de navegación
    const navLinks = document.querySelectorAll("nav a");
    navLinks[0].textContent = content[lang].navInicio;
    navLinks[1].textContent = content[lang].navActriz;
    navLinks[2].textContent = content[lang].navClown;
    navLinks[3].textContent = content[lang].navEspectaculos;
    navLinks[4].textContent = content[lang].navEducacion;
    navLinks[5].textContent = content[lang].navContacto;
    
    // Cambiar el pie de página
    document.querySelector(".pie p").textContent = content[lang].footer;

    // Cambiar las banderas (opcional)
    const flagEs = document.getElementById("flag-es");
    const flagEn = document.getElementById("flag-en");
    if (lang === 'es') {
        flagEs.style.opacity = 1;
        flagEn.style.opacity = 0.5;
    } else {
        flagEn.style.opacity = 1;
        flagEs.style.opacity = 0.5;
    }
}

// Evento para cambiar el idioma cuando se hace clic en una bandera
document.getElementById("flag-en").addEventListener("click", function() {
    changeLanguage('en');
});
document.getElementById("flag-es").addEventListener("click", function() {
    changeLanguage('es');
});
