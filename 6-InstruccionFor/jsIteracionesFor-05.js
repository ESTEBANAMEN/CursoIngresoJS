/*
Esteban Juan Amén
	DIV - F
Ejercicio 5 - for;
*/
function mostrar() {
	let numero;

	for (; ;) {
		numero = prompt("Ingrese um número:");
		if (numero == 9) {
			break;
		}
	}

	document.write(
		`<h1 style = "color:red"> CORRECTOOO!! (diría Susana Gimenez)<h1>
	`)
}