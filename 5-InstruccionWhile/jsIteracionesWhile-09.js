/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	let numero;
	let i = 0;
	let flagMaxMin = 0;
	let maximo;
	let minimo;
	let seguir;
	
	do {
		numero = prompt("Ingrese un numero:")
			
		while (isNaN(numero)) {
				numero = prompt("ERROR!! Ingrese un numero:")
		}

		if (flagMaxMin == 0) {
			maximo = numero;
			minimo = numero;
			flagMaxMin = 1;
		} else if (numero > maximo) {
			maximo = numero;
		} else if (numero < minimo) {
			minimo = numero;
		}

		i++;

		seguir = prompt("Desea ingresar otro numero? \nSi = 's'.\nNo = tecla cualquiera.");

	} while (seguir == 's'); 

	document.getElementById('txtIdMaximo').value = maximo;
	document.getElementById('txtIdMinimo').value = minimo;
	alert(`La iteración dio ${i} vueltas!!`)
}