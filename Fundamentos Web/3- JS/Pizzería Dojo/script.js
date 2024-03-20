function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
    
var p1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(p1);

var p2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebolla"])
console.log(p2);

var tipoCortezas = [
    "estilo Chicago",
    "lanzada a mano",
    "estilo Napolitana",
    "coliflor",
    "margarita",
    "Hawaiana"
];

var tipoSalsas = [
    "tradicional",
    "marinara",
    "bbq",
    "blanca",
    "queso",
    "cacera"
];

var quesos = [
    "mozzarella",
    "cheddar",
    "feta",
    "ricotta",
    "parmesano",
    "vegano"
];

var salsas = [
    "pepperoni",
    "salchica",
    "champiñones",
    "aceitunas",
    "cebolla",
    "bacon",
    "pimiento",
    "pollo"
];


function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.tipoCorteza = randomPick(tipoCortezas);
    pizza.tipoSalsa = randomPick(tipoSalsas);
    pizza.quesos = [];
    pizza.salsas = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.quesos.push(randomPick(quesos));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.salsas.push(randomPick(salsas));
    }
    return pizza;
}

console.log(randomPizza());
console.log(randomPizza());