/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
dispondremos de un cuadro de texto para ingresar
un número y un botón “Verificar”, si el número 
ingresado es el mismo que el número secreto se dará 
por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

const NUMERO_RANDOM = Math.trunc(Math.random() * 100 + 1);
var intentos = 1;
console.log(NUMERO_RANDOM);

function comenzar() {
  console.log(NUMERO_RANDOM);
}


function verificar() {
  const NUMERO_INGRESADO = document.getElementById('txtIdNumero').value;

  if (NUMERO_INGRESADO == NUMERO_RANDOM) {
    document.write(
      `<h1>Usted es un ganador y en solo ${intentos} intentos!!</h1>`
    );
  } else {
    if (NUMERO_INGRESADO < NUMERO_RANDOM) {
      alert("Falta para llegar al número secreto!!")
      document.getElementById('txtIdIntentos').value = intentos++;
    } else {
      alert("Se pasó del número secreto!!")
      document.getElementById('txtIdIntentos').value = intentos++;
    }
  }
}