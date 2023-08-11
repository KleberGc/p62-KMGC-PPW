function saludar(nombre, fn) {
    setTimeout(function() {
        console.log(`Hola ${nombre}`)
        fn(nombre)
    }, 1000)
}

function hablar(nombre) {
    setTimeout(function(){
        console.log('bla, bla, bla ....')
    }, 1000)
}

console.log('Iniciando conversacion...')
saludar('Kleber', hablar)
console.log('Terminando conversacion...')