let mi_carro = {
    marca: 'Jeep',
    modelo: 'Rubicon',
    anio: 2024,
    detalle_auto: function() {
        console.log('Auto: ${this.marca}-${this.modelo}, Año: $(this.anio).' )
    }
}

console.log(mi_carro.marca)
mi_carro.detalle_auto()