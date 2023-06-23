var imagenCargada = false; // Variable para verificar si la imagen ya ha sido cargada

function cargar_elemento() {
  if (!imagenCargada) {
    var container = document.getElementById('container');
    var img = document.createElement('img');
    img.src = 'images/tux_ironman.png';
    container.appendChild(img);
    imagenCargada = true; // Marcar la imagen como cargada
  }
}

function eliminar_elemento() {
  var container = document.getElementById('container');
  container.removeChild(container.lastElementChild);
  imagenCargada = false; // Restablecer la variable para permitir cargar una nueva imagen
}
  