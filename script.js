console.log("empezamos de nuevo");


window.addEventListener('load', init);

function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web');
}
const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);

let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH', 'MOUTH', 'SMILE', 'CURVE', 'MOIST'];

let intentos = 6;

const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra) {
        terminar("<h1>GANASTE! 😀</h1>")
        return;
    }
    const GRID = document.getElementById("grid");

    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (const i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';

        if (INTENTO[i] === palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        }
        else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    intentos--;
    if (intentos==0){
        terminar("<h1>PERDISTE! 😖</h1>")
    }
}

function leerIntento(){
    let intento = document.getElementById("guess-input")
    intento = intento.value;
    intento= intento.toUpperCase();
    return intento;
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}

const input = document.getElementById("guess-input");
const valor = input.value;



