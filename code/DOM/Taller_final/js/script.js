function show() {
    document.getElementById('image')
    document.getElementById('btnID').style.display = "none"
}

function hide() {
    var container = document.getElementById('container')
    container.removeChild( container.lastElementChild )
}