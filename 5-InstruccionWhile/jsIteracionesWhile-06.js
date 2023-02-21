/*
	Esteban Juan Amén
		Div - F
   Ejercicio 6 - while;

			Enunciado:
Al presionar el botón pedir 5 números
e informar la suma acumulada y el promedio.
*/

function mostrar() {
	let i = 0;
	let numero;
	let acumulador = 0;
	let promedio;

	while (i < 5) {
		i++;
		numero = parseInt(prompt("Ingrese un numero!"));

		while (isNaN(numero)) {
			numero = prompt("ERROR!! Ingrese un numero!");
		}

		acumulador += numero;
	}
	
	promedio = acumulador / 5;

	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = promedio;
	alert ("La iteración dió " + i + " vueltas!");
}