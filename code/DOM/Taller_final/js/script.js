function cargarImagen() {
    var imagenContainer = document.getElementById("imagenContainer");
    var imagen = document.createElement("img");
    imagen.src = "ruta/imagen.jpg"; // Reemplaza "ruta/imagen.jpg" con la ruta de tu imagen
    imagenContainer.appendChild(imagen);
}

function eliminarImagen() {
    var imagenContainer = document.getElementById("imagenContainer");
    imagenContainer.innerHTML = "";
}
