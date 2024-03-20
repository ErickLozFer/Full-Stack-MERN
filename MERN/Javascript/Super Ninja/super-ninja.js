class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 50;
        this.fuerza = 3;
        this.velocidad = 3;
    }

    sayName() {
        console.log(`¡Soy el ninja ${this.nombre}!`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} toma sake y recupera 10 puntos de salud.`);
    }
}

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre);
        this.salud = 200;
        this.fuerza = 10;
        this.velocidad = 10;
        this.sabiduría = 10;
    }

    sayName() {
        console.log(`¡Soy el sensei ${this.nombre}!`);
    }

    speakWisdom() {
        console.log(`Cada persona vive sus propias batallas, pero aprende a transformar el "no puedo" en "lo voy a conseguir".`)
    }
}


const superSensei = new Sensei("Sekiro");
superSensei.sayName();
superSensei.showStats();
superSensei.speakWisdom();
superSensei.drinkSake();
superSensei.showStats();