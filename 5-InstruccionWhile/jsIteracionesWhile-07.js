/*
	Esteban Juan Amén
		Div - F
   Ejercicio 7 - while;

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let numero;
	let acumulador = 0;
	let contador = 0;
	let seguir;

	do {
		numero = parseInt(prompt("Ingrese un numero!!"));

		while (isNaN(numero)) {
			numero = prompt("ERROR!! Ingrese un numero!!");
		}

		acumulador += numero;
		contador++;
		seguir = prompt("Desea ingresar otro numero?\nSi = 's'.\nNo = tecla cualquiera.");
	} while (seguir == 's');

	document.getElementById('txtIdSuma').value = acumulador; 
	document.getElementById('txtIdPromedio').value = acumulador / contador;
	alert ("La iteración dio " + contador + " vueltas!!");
}