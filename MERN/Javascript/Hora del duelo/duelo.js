// Definir las cartas de unidades y efectos
const cards = {
    "Ninja Cinturón Rojo": {
        type: "unidad",
        costo: 3,
        poder: 3,
        resiliencia: 4,
        image: "ninja_cinturón_rojo.jpg"
    },
    "Ninja Cinturón Negro": {
        type: "unidad",
        costo: 4,
        poder: 5,
        resiliencia: 4,
        image: "ninja_cinturón_negro.jpg"
    },
    "Algoritmo Difícil": {
        type: "efecto",
        costo: 2,
        texto: "aumentar la resistencia del objetivo en 3",
        stat: "resiliencia",
        magnitud: "+3",
        image: "algoritmo_difícil.jpg"
    },
    "Rechazo de promesa no manejado": {
        type: "efecto",
        costo: 1,
        texto: "reducir la resistencia del objetivo en 2",
        stat: "resiliencia",
        magnitud: "-2",
        image: "rechazo_de_promesa_no_manejado.jpg"
    },
    "Programación en pareja": {
        type: "efecto",
        costo: 3,
        texto: "aumentar el poder del objetivo en 2",
        stat: "poder",
        magnitud: "+2",
        image: "programación_en_pareja.jpg"
    }
};

// Función para representar una carta en HTML
function renderCard(cardName, player) {
    const card = cards[cardName];
    const hand = document.getElementById(`player-${player}-hand`);
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.innerHTML = `
        <img src="images/${card.image}" alt="${cardName}">
        <p>${cardName}</p>
        <p>Costo: ${card.costo}</p>
        <p>Poder: ${card.poder || ''}</p>
        <p>Resiliencia: ${card.resiliencia || ''}</p>
        <p>${card.texto || ''}</p>
        <p>${card.stat || ''}: ${card.magnitud || ''}</p>
    `;
    hand.appendChild(cardDiv);
}

// Función para simular el juego
function playScenario() {
    const gameLog = document.getElementById("game-log");
    gameLog.innerHTML = "";

    // Turno 1
    gameLog.innerHTML += "<p>Turno 1:</p>";
    renderCard("Ninja Cinturón Rojo", 1);
    renderCard("Algoritmo Difícil", 1);

    // Turno 2
    gameLog.innerHTML += "<p>Turno 2:</p>";
    renderCard("Ninja Cinturón Negro", 2);
    renderCard("Rechazo de promesa no manejado", 2);

    // Turno 3
    gameLog.innerHTML += "<p>Turno 3:</p>";
    renderCard("Programación en pareja", 1);

    // Ataque
    gameLog.innerHTML += "<p>Ataque:</p>";
    gameLog.innerHTML += "<p>El jugador 1 ataca con 'Ninja Cinturón Rojo' a 'Ninja Cinturón Negro'</p>";
}

// Llamar a la función para iniciar el escenario
playScenario();
