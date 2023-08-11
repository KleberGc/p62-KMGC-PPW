function saludar(nombre, fn) {
    setTimeout(function() {
        console.log(`Hola ${nombre}`)
        fn(nombre, adios)
    }, 3000)
}

function hablar(nombre, fn) {
    setTimeout(function(){
        console.log('bla, bla, bla ....')
        fn(nombre)
    }, 1000)
}

function adios(nombre) {
    setTimeout(function(){
        console.log(`Adiós ${nombre}.`)
        console.log('Terminando conversacion...')
    }, 1000)
}

console.log('Iniciando conversacion...')
saludar('Kleber', hablar)
