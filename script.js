// Fonction pour animer le titre en fondu et déplacement
function animateTitle() {
    const title = document.getElementById("Maxime Kunsch");
    let opacity = 0;
    let position = -50; // Position initiale en haut de l'écran

    function step() {
        if (opacity < 1) {
            opacity += 0.01;
            position += 1;
            title.style.opacity = opacity;
            title.style.top = position;
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

// Animation lors du scroll
window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('#about');
    const portfolioSection = document.querySelector('#portfolio');
    const contactSection = document.querySelector('#contact');

    if (window.scrollY > 50) {
        aboutSection.style.opacity = '1';
        aboutSection.style.transform = 'translateY(0)';
    }

    if (window.scrollY > 400) {
        portfolioSection.style.opacity = '1';
        portfolioSection.style.transform = 'translateY(0)';
    }

    if (window.scrollY > 800) {
        contactSection.style.opacity = '1';
        contactSection.style.transform = 'translateY(0)';
    }
});

// Initialisation des sections pour qu'elles soient cachées avec animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
});


// Exécuter l'animation lorsque la page est chargée
window.onload = function() {
    animateTitle();
    var music = document.getElementById("background-music");
    music.play();
};


