function myBirthYearFunc() {
    console.log("Nací en " + 1980);
}

myBirthYearFunc();
//lo que indicará cuando se llame a la función será: Nací en 1980


function myBirthYearFunc(EntradaAñoNacimiento) {
    console.log("Nací en " + EntradaAñoNacimiento);
}

var EntradaAñoNacimiento = 1980;
myBirthYearFunc(EntradaAñoNacimiento);
//Lo que indicará es: Nací en 1980


function add(num1, num2) {
    console.log("¡Sumando números!");
    var num1 = 10;
    var num2 = 20;
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}

add();
/*La consola indicará:
¡Sumando números!
num1 is: 10
num2 is: 20
30*/