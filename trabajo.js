function comida() {
    const imagen = document.getElementById('dibujo');
    const musica = document.getElementById('musica');

    // Mostrar imagen con transición
    imagen.classList.remove('oculto');
    setTimeout(() => {
        imagen.style.opacity = 1;
    }, 100); // retrasa para que la transición se aplique

    // Reproducir música
    musica.play();
}
