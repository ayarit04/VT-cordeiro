document.addEventListener("DOMContentLoaded", () => {
    
    // ... (Aquí está tu código anterior del título mágico) ...

    /* =========================================
       CÓDIGO PARA EL VISOR DE IMÁGENES (LIGHTBOX)
       ========================================= */
    const visor = document.getElementById('visor-imagenes');
    const imagenAmpliada = document.getElementById('imagen-ampliada');
    const btnCerrar = document.querySelector('.cerrar-visor');
    const imagenesGaleria = document.querySelectorAll('.galeria-aulas img');

    // Al hacer clic en cualquier imagen de la galería
    imagenesGaleria.forEach(img => {
        img.addEventListener('click', () => {
            imagenAmpliada.src = img.src; // Copiamos la ruta de la foto tocada
            visor.classList.add('activo'); // Mostramos el visor centrado
        });
    });

    // Cerrar al tocar la "X"
    btnCerrar.addEventListener('click', () => {
        visor.classList.remove('activo');
    });

    // Cerrar al tocar en cualquier parte del fondo negro
    visor.addEventListener('click', (evento) => {
        if (evento.target === visor) {
            visor.classList.remove('activo');
        }
    });
});