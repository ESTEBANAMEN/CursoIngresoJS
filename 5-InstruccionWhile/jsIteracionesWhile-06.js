function mostrar() {
	
	let i = 0;
	let numero;
	let acumulador = 0;
	let promedio;

	while (i < 5) {
		i++;
		numero = prompt("Ingrese un numero!");

		while (isNaN(numero)) {
			numero = prompt("ERROR!! Ingrese un numero!");
		}

		acumulador += parseFloat(numero);
	}
	
	promedio = acumulador/5;

	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = promedio;
	alert (`La iteración dió ${i} vueltas!`);
}