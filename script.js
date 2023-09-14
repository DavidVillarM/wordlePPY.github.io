//console.log("empezamos de nuevo");

window.addEventListener('load', init);

function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web');
}

const instru = document.getElementById("instrucciones");

instru.addEventListener("click", explicar);

function explicar(){
    alert("Instrucciones del Juego:\n" + 
        "Tienes que adivinar la palabra oculta en 6 intentos y" + " el color de las letras cambia para mostrar lo cerca que estas. " +
            "Para comenzar el juego, simplemente ingrese cualquier palabra, por ejemplo:\n \n" + "MANOS\n \n" +
            "- Si la letra no existe en la palabra que debes adivinar, la casilla estara en gris \n" +
            "- Si la letra esta dentro de la palabra pero no en la posicion correcta, la casilla se volvera amarilla \n" +
            "- Si la letra esta dentro de la palabra y en la posicion correcta, la casilla se volvera verde\n");
    return;
}

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);

let palabra = fetch('https://random-word-api.herokuapp.com/word?length=5&lang=es')
 	.then(response => response.json())
 	.then(response => {
         console.log(response)
         palabra = response[0].toUpperCase()
     })
 	.catch(err => console.error(err));

let intentos = 6;


//Funcion para comparar la palabra ingresada con la palabra aleatoria
function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra) {
        terminar("<h1>GANASTE! 😀</h1>")
        return;
    }
    for (const i in palabra){
        if (INTENTO[i] === Number){
            ("Debe ingresar un caracter valido");
            return;
        }
    }

    const GRID = document.getElementById("grid");

    const ROW = document.createElement('div');
    ROW.className = 'row';

    if (INTENTO.length !=5) {
        alert("Debe ingresar una palabra de 5 letras");
        return;
    }

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
    if (intento.length == 5){
        intento= intento.toUpperCase();
    } else {
        alert('Ingreso no valido')
    }
    return intento;
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
    let resultado = document.getElementById("word");
    resultado.innerHTML = palabra;
}

const input = document.getElementById("guess-input");
const valor = input.value;



