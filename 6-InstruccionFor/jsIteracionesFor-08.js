/*
Esteban Juan Amén
	DIV - F
Ejercicio 8 - for;
*/
function mostrar() {
	let numero;
	let i = 0;
	let contadorDivisores = 0;
	let mensaje1 = "Divisores:";
	let mensaje2;
	let mensaje3;

	numero = parseInt(prompt("Ingrese un numero mayor que 0:"));

	while (isNaN(numero) || numero < 0) {
		numero = parseInt(prompt("ERROR!! Ingrese un numero y que este sea, mayor que 1:"));
	}

	for (i; i <= numero; i++) {
		if (numero % i == 0) {
			contadorDivisores++;
			mensaje1 = mensaje1 + "\n" + i;
		}
	}

	mensaje2 = "\nLa cantidad de divisores es de: " + contadorDivisores + ".";

	if (contadorDivisores == 2) {
		mensaje3 = "\nEste numero es PRIMO!!";
		alert(mensaje1 + mensaje2 + mensaje3);
	} else {
		alert(mensaje1 + mensaje2);
	}
}