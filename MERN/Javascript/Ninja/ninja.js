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
        console.log(`${this.nombre} toma Sake y recupera 10 puntos de salud.`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
