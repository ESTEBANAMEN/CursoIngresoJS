function mostrar() {
	let numero;
	let i = 1;
	let contadorDivisores = 0;
	let flagDivisores = 0;

	numero = prompt("Ingrese un numero mayor que 1:");

	while (isNaN(numero) || numero < 1) {
		numero = prompt("ERROR!! Ingrese un numero mayor que 1:");
	}

	for (i ; i <= numero ; i++ ) {
		if (numero % i == 0) {
			contadorDivisores ++;
			if (flagDivisores == 0) {
				document.write("DIVISORES:<br>");
				flagDivisores = 1;
			}
			document.write(i + "<br>");
		}
	}
	
	document.write(`La cantidad de divisores es de: ${contadorDivisores}`);

	if (contadorDivisores == 2) {
		document.write ("<br>Este numero es primo de mi prima!!");
	}
}