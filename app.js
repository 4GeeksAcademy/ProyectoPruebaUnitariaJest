// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { fromEuroToDollar }

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInYen * 156.5;
    return valueInYen;
}

module.exports = { fromDollarToYen }

const fromYenToPound = function() {
    let valueInPound = valueInPound * 0.87;
    return valueInPound;
}

module.exports = { fromYenToPound }