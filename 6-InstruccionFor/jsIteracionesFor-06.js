/*
Esteban Juan Amén
	DIV - F
Ejercicio 6 - for;
*/
function mostrar() {
	let numero;
	let i = 1;
	let contadorPar = 0;

	numero = parseInt(prompt("Ingrese el nunmero deseado:"));
	while (isNaN(numero)) {
		numero = parseInt(prompt("ERROR!! Ingrese un numero!!:"));
	}

	if (numero > 0) {
		for (i; i <= numero; i++) {
			if (i % 2 == 0) {
				contadorPar++;
			}
		}
	} else {
		for (i; i >= numero; i--) {
			if (i % 2 == 0 && i != 0) {
				contadorPar++;
			}
		}
	}

	alert("Hay " + contadorPar + " numeros pares encontrados entre 1 y " + numero);
}