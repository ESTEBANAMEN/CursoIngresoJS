/*
	Esteban Juan Amén
		Div - F
Ejercicio 10 INTEGRADOR - while;

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.x
2-Suma de los positivos.x
3-Cantidad de positivos.x
4-Cantidad de negativos.x
5-Cantidad de ceros.x
6-Cantidad de números pares.x
7-Promedio de positivos.x
8-Promedios de negativos.x
9-Diferencia entre positivos y negativos, (positvos-negativos).
10-Porcentaje de números positivos y negativos.
11-De los positivos el más grande.
12-De los negativos el más chico
*/
function mostrar() {

	let seguir;
	let numero;
	let acumuladorPositivos = 0;
	let contadorPositivos = 0;
	let acumuladorNegativos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaPosNeg;
	let contadorTotal;
	let porcentajePositivos;
	let porcentajeNegativos;
	let flagPositivoMasGrande = 0;
	let positivoMasGrande;
	let flagNegativoMasChico = 0;
	let negativoMasChico;



	do {
		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero)) {
			numero = prompt("ERROR!! Ingrese un numero:")
		}

		if (numero > 0) {
			acumuladorPositivos += numero;
			contadorPositivos++;
		} else {
			if (numero < 0) {
				acumuladorNegativos += numero;
				contadorNegativos++;
			} else {
				contadorCeros++;
			}
		}
		if ((numero % 2 == 0) && numero != 0) {
			contadorPares++;
		}

		if (flagPositivoMasGrande == 0 && numero > 0) {
			positivoMasGrande = numero;
			flagPositivoMasGrande = 1;
		} else {
			if (numero > positivoMasGrande) {
				positivoMasGrande = numero;
			}
		}

		if (flagNegativoMasChico == 0 && numero < 0) {
			negativoMasChico = numero;
			flagNegativoMasChico = 1;
		} else {
			if (numero < negativoMasChico) {
				negativoMasChico = numero;
			}
		}
		seguir = prompt("Desea ingresar otro numero? \nSi = 's'\nNo = tecla cualquiera");
	} while (seguir == 's');

	promedioPositivos = acumuladorPositivos / contadorPositivos;
	promedioNegativos = acumuladorNegativos / contadorNegativos;
	diferenciaPosNeg = acumuladorPositivos - acumuladorNegativos;
	contadorTotal = contadorCeros + contadorNegativos + contadorPositivos;
	porcentajePositivos = contadorPositivos / contadorTotal * 100;
	porcentajeNegativos = contadorNegativos / contadorTotal * 100;

	document.write(
		"La suma de los Positivos es de: " + acumuladorPositivos + "<br>" +
		"La suma de los Negativos es de: " + acumuladorNegativos + "<br>" +
		"La cantidad de Positivos es de: " + contadorPositivos + "<br>" +
		"La cantidad de Negativos es de: " + contadorNegativos + "<br>" +
		"La cantidad de Ceros es de: " + contadorCeros + "<br>" +
		"La cantidad de Pares es de: " + contadorPares + "<br>" +
		"El promedio de Positivos es de: " + promedioPositivos + "<br>" +
		"El promedio de Negativos es de: " + promedioNegativos + "<br>" +
		"La diferencia entre Positivos y Negativos es de: " + diferenciaPosNeg + "<br>" +
		"El porcentaje de Positivos ingresados es de: " + porcentajePositivos.toFixed(2) + "%" + "<br>" +
		"El porcentaje de Negativos ingresados es de: " + porcentajeNegativos.toFixed(2) + "%" + "<br>" +
		"El Positivo ingresado con mayor valor es: " + positivoMasGrande + "<br>" +
		"El Negativo ingresado con menor valor es: " + negativoMasChico
	);
}