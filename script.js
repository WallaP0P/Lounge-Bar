document.addEventListener("DOMContentLoaded", function() {
    
    // Selezioniamo tutti gli elementi con la classe "hidden"
    const hiddenElements = document.querySelectorAll('.hidden');

    // Creiamo un "osservatore" che capisce quando un elemento appare sullo schermo
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Aggiunge la classe "visible" che attiva l'animazione CSS
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // L'animazione parte quando almeno il 10% dell'elemento è visibile
    });

    // Diciamo all'osservatore di controllare tutti i nostri elementi nascosti
    hiddenElements.forEach(el => observer.observe(el));

    // Effetto trasparenza per la barra di navigazione quando si scorre
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(16, 0, 43, 0.95)';
            navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(16, 0, 43, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

});