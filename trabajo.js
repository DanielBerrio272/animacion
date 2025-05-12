function comida() {
    const imagen = document.getElementById('dibujo');
    const musica = document.getElementById('musica');


    imagen.classList.remove('oculto');
    setTimeout(() => {
        imagen.style.opacity = 1;
    }, 100);

    musica.play();
}
