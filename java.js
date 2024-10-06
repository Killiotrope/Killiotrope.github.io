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
            title.style.top = position + "px";
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

// Exécuter l'animation lorsque la page est chargée
window.onload = function() {
    animateTitle();
};
