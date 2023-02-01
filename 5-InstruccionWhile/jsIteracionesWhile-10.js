/*
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
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {

	let seguir;
	let numero;
	let acumuladorPositivos = 0;
	let cantidadPositivos = 0;
	let acumuladorNegativos = 0;
	let cantidadNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaPosNeg;


	do {
		numero = prompt("Ingrese un numero:")
		
		while (isNaN(numero)) {
			numero = prompt("ERROR!! Ingrese un numero:")
		}

		if (numero >= 0) {
			if (numero == 0) {
				contadorCeros++;
			}
			acumuladorPositivos += parseFloat(numero);
			cantidadPositivos++;
		} else {
			acumuladorNegativos += parseFloat(numero);
			cantidadNegativos++;
		}

		if (numero % 2 == 0) {
			contadorPares++;
		}



		
		seguir = prompt("Desea ingresar otro numero? \nSi = 's'\nNo = tecla cualquiera");

	} while (seguir == 's');

	promedioPositivos = acumuladorPositivos / cantidadPositivos;
	promedioNegativos = acumuladorNegativos / cantidadNegativos;
	diferenciaPosNeg = acumuladorPositivos - acumuladorNegativos;

	document.write(
		`La suma de los Positivos es de: ${acumuladorPositivos}<br>
		La suma de los Negativos es de: ${acumuladorNegativos}<br>
		La cantidad de Positivos es de: ${cantidadPositivos}<br>
		La cantidad de Negativos es de: ${cantidadNegativos}<br>
		La cantidad de Ceros es de: ${contadorCeros}<br>
		La cantidad de Pares es de: ${contadorPares}<br>
		El promedio de Positivos es de: ${promedioPositivos}<br>
		El promedio de Negativos es de: ${promedioNegativos}<br>
		La diferencia entre Positivos y Negativos es de: ${diferenciaPosNeg}`
	);
}