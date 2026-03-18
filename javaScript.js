/**
 * Efecto de iluminación letra por letra para Team Cordeiro
 * Este script busca un ID específico, separa el texto y envuelve cada letra en un span.
 */
document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementById('titulo-magico');
    
    if (titulo) {
        const textoOriginal = titulo.textContent;
        // Limpiamos el contenido actual del H2
        titulo.innerHTML = '';

        // Convertimos el texto en un array de caracteres
        [...textoOriginal].forEach(letra => {
            const span = document.createElement('span');
            
            // Manejo de espacios para que no se rompa la estructura
            if (letra === ' ') {
                span.innerHTML = '&nbsp;';
            } else {
                span.textContent = letra;
            }
            
            titulo.appendChild(span);
        });
    }
});