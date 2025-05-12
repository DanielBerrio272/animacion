function comida() {
    const imagen = document.getElementById('dibujo');
    const musica = document.getElementById('musica');

    imagen.style.display = 'block';
    setTimeout(() => {
        imagen.style.opacity = 1;
    }, 100);

    // Reproducir música
    musica.play();
}

