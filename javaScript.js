/*document.addEventListener("DOMContentLoaded", () => {
    const visor = document.getElementById('visor-imagenes');
    const contenedorContenido = document.getElementById('contenedor-contenido-ampliado');
    const btnCerrar = document.querySelector('.cerrar-visor');

    // Función para abrir el visor con contenido específico
    const abrirVisor = (nodoContenido, esImagen = false) => {
        contenedorContenido.innerHTML = ''; // Limpiamos contenido previo
        
        if (esImagen) {
            // Si es imagen, creamos un elemento img nuevo
            const nuevaImg = document.createElement('img');
            nuevaImg.src = nodoContenido.src;
            nuevaImg.alt = nodoContenido.alt;
            nuevaImg.classList.add('contenido-zoom-img');
            contenedorContenido.appendChild(nuevaImg);
        } else {
            // Si es tabla, clonamos el nodo completo
            const clonTabla = nodoContenido.cloneNode(true);
            clonTabla.classList.add('contenido-zoom-tabla'); // Clase para estilos extra en zoom
            contenedorContenido.appendChild(clonTabla);
        }

        visor.classList.add('activo');
        document.body.style.overflow = 'hidden'; // Previene scroll en el fondo
    };

    // Función para cerrar el visor
    const cerrarVisor = () => {
        visor.classList.remove('activo');
        document.body.style.overflow = ''; // Restaura scroll
    };

    // --- SELECCIONAR ELEMENTOS CLICKEABLES ---

    // 1. Imágenes de la galería
    const imagenesGaleria = document.querySelectorAll('.galeria-aulas img');
    imagenesGaleria.forEach(img => {
        img.addEventListener('click', () => abrirVisor(img, true));
    });

    // 2. Tablas de Horarios (NUEVO)
    const tablasHorarios = document.querySelectorAll('.horarios-box');
    tablasHorarios.forEach(tabla => {
        // Añadimos el cursor pointer vía JS para indicar que es clickeable
        tabla.style.cursor = 'pointer';
        tabla.addEventListener('click', () => abrirVisor(tabla, false));
    });

    // --- EVENTOS DE CIERRE ---
    btnCerrar.addEventListener('click', cerrarVisor);

    // Cerrar al hacer clic en el fondo oscuro
    visor.addEventListener('click', (e) => {
        if (e.target === visor || e.target === contenedorContenido) {
            cerrarVisor();
        }
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && visor.classList.contains('activo')) {
            cerrarVisor();
        }
    });
});



/*menu responsivo*/
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
    const abrir = document.querySelector(".menu-open");
    const cerrar = document.querySelector(".menu-close");

    if (abrir && nav && cerrar) {
        abrir.addEventListener("click", () => {
            nav.classList.add("visible");
        });

        cerrar.addEventListener("click", () => {
            nav.classList.remove("visible");
        });
    }
});