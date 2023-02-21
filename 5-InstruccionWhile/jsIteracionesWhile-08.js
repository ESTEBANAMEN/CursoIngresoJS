/*
	Esteban Juan Amén
		Div - F
   Ejercicio 8 - while;

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let numero;
	let seguir;
	let acumuladorPositivos = 0;
	let productoNegativos = 1;
	let i = 0;

	do {
		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero)) {
			numero = prompt("ERROR!! Ingrese un numero:");
		}

		if (numero > -1) {
			acumuladorPositivos += numero;
		} else {
			productoNegativos *= numero;
		}

		i++;
		seguir = prompt("Quiere ingresar otro numero? \nSi = 's'.\nNo = tecla cualquiera");
	} while (seguir == 's');

	document.getElementById('txtIdSuma').value = acumuladorPositivos;

	if (productoNegativos != 1) {
		document.getElementById('txtIdProducto').value = productoNegativos;
	} else {
		document.getElementById('txtIdProducto').value = "No se ingresaron numeros negativos!";
	}

	alert("La iteración dio " + i + " vueltas!!");
}