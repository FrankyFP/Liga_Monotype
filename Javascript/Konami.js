// El codigo konami va aquí!
let keys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    65: "a",
    66: "b",
    13: "enter"
};

let konamiCode = ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a", "enter"];
let keyCount = 0;

let timerID;

document.addEventListener("keydown", checkCode, false);

function checkCode(e) {
    let keyPressed = keys[e.keyCode];

    if (keyPressed === konamiCode[keyCount]) {
        keyCount++;

        // Reseteamos el timer
        window.clearTimeout(timerID);

        // Empezar un timer con 1 segundo de espera
        timerID = window.setTimeout(resetKeyState, 1000);

        // Mira si hay algun error en la combinacion
        if (keyCount === konamiCode.length) {
            cheatCodeActivated();
            resetKeyState();
        }
    } else {
        resetKeyState();
    }
}

function cheatCodeActivated() {
    location.href = "../Html/Tas_seguro.html";
}

function resetKeyState() {
    console.log("Resetting state!");
    window.clearTimeout(timerID);
    keyCount = 0;
}