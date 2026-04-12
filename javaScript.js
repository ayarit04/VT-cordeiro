document.addEventListener("DOMContentLoaded", () => {
    // --- 1. REFERENCIAS DE ELEMENTOS ---
    const visor = document.getElementById('visor-imagenes');
    const contenedorContenido = document.getElementById('contenedor-contenido-ampliado');
    const btnCerrar = document.querySelector('.cerrar-visor');
    const nav = document.querySelector(".nav");
    const abrirMenu = document.querySelector(".menu-open");
    const cerrarMenu = document.querySelector(".menu-close");
    const cards = document.querySelectorAll('.card-hover');

    // --- 2. LÓGICA DEL VISOR (Galería y Horarios) ---
    if (visor && contenedorContenido) {
        const abrirVisor = (nodoContenido, esImagen = false) => {
            contenedorContenido.innerHTML = '';
            
            if (esImagen) {
                const nuevaImg = document.createElement('img');
                nuevaImg.src = nodoContenido.src;
                nuevaImg.classList.add('contenido-zoom-img');
                contenedorContenido.appendChild(nuevaImg);
            } else {
                const clon = nodoContenido.cloneNode(true);
                clon.classList.add('contenido-zoom-tabla');
                contenedorContenido.appendChild(clon);
            }

            visor.classList.add('activo');
            document.body.style.overflow = 'hidden';
        };

        const cerrarVisor = () => {
            visor.classList.remove('activo');
            document.body.style.overflow = '';
        };

        // Eventos para abrir
        document.querySelectorAll('.galeria-aulas img').forEach(img => {
            img.addEventListener('click', () => abrirVisor(img, true));
        });
        // Eventos para cerrar
        if (btnCerrar) btnCerrar.addEventListener('click', cerrarVisor);
        visor.addEventListener('click', (e) => {
            if (e.target === visor || e.target === contenedorContenido) cerrarVisor();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && visor.classList.contains('activo')) cerrarVisor();
        });
    }

    // --- 3. MENÚ RESPONSIVO ---
    if (abrirMenu && nav && cerrarMenu) {
        abrirMenu.addEventListener("click", () => nav.classList.add("visible"));
        cerrarMenu.addEventListener("click", () => nav.classList.remove("visible"));
    }

    // --- 4. ACORDEÓN MOBILE (Sobre Nós) ---
    cards.forEach(card => {
        card.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                const isActive = this.classList.contains('active-mobile');
                cards.forEach(c => c.classList.remove('active-mobile')); // Cierra otros
                if (!isActive) this.classList.add('active-mobile');     // Abre el actual
            }
        });
    });
});