function cargar_elemento() {
    var container = document.getElementById('container');
    var img = document.createElement('img');
    img.src = 'images/batux.png';
    container.appendChild(img);
  }
  
  function eliminar_elemento() {
    var container = document.getElementById('container');
    container.removeChild(container.lastElementChild);
  }
  