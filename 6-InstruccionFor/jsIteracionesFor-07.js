/*
Esteban Juan Amén
	DIV - F
Ejercicio 7 - for;
al presionar el botón pedir un número, mostrar los numeros divisores 
desde el 1 al número ingresado, y mostrar la cantidad de numeros
divisores encontrados.
*/
function mostrar() {
	let numero;
	let i = 1;
	let cantidadDivisores = 0;

	numero = parseInt(prompt("Ingrese su numero:"));
	while (isNaN(numero)) {
		numero = parseInt(prompt("ERROR!!ngrese su numero:"));
	}

	if (numero > 0) {
		for (i ; i <= numero ; i++) {
			if (numero % i == 0) {
				cantidadDivisores++;
			}
		}
	} else {
		for (i ; i >= numero ; i--) {
			if (numero % i == 0) {
				cantidadDivisores++;
			}
		}
	}

	alert("Hay " + cantidadDivisores + " divisores entre el 1 y " + numero);
}