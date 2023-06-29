// Obtenemos la referencia al elemento cajita
const cajita = document.getElementById("cajita");

// Agregamos un evento de clic al documento
document.addEventListener("click", function(event) {
    // Obtenemos las coordenadas del clic
    const x = event.clientX;
    const y = event.clientY;
    
    // Movemos la cajita a las nuevas coordenadas
    moveCajita(x, y);
});

// Función para mover la cajita a las coordenadas dadas
function moveCajita(x, y) {
    // Movemos la cajita al punto indicado
    cajita.style.left = x + "px";
    cajita.style.top = y + "px";
    
    // Imprimimos las coordenadas en la consola
    console.log("Posición: X=" + x + ", Y=" + y);
}
