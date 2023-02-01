function mostrar() {

	let numero;

	for (; ;) {
		numero = prompt("Ingrese um número:");

		if (numero == 9) {
			break;
		}
	}

	document.write (
		`<h1 style = "color:red"> CORRECTO!! (diría Susana Gimenez)<h1>
	`)
}