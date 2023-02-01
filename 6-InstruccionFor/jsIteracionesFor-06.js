function mostrar() {
	let numero;
	let i = 1;
	let contadorNumPar = 0;

	numero = prompt("Ingrese un numero mayor que 1:");

	while (isNaN(i) || numero < 1) {
		numero = prompt("ERROR!! Ingrese un numero mayor que 1:");
	}

	for (i ; i <= numero ; i++ ) {
		if (i % 2 == 0) {
			contadorNumPar++;
			document.write(i + "<br>" );
		}
	}
	document.write(`La cantidad de numeros pares es de: ${contadorNumPar}`);
}