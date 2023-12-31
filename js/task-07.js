// Obtener los elementos HTML necesarios
const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

// Función para cambiar el tamaño de fuente del texto
function changeFontSize() {
    const fontSize = fontSizeControl.value + 'px'; // Obtener el valor del control de tamaño de fuente y concatenar 'px'

    // Actualizar el estilo inline del span con el tamaño de fuente
    textSpan.style.fontSize = fontSize;
}

// Asignar escucha de evento input al control de tamaño de fuente
fontSizeControl.addEventListener('input', changeFontSize);