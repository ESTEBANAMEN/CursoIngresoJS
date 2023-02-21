/*
	Esteban Juan Amén
		Div - F
	Ejercicio 3 - switch;
*/
function mostrar() {
	let mes;

	mes = document.getElementById('txtIdMes').value;

	switch (mes) {
		case ("Febrero"):
			alert("No tiene mas de 29 días.");
			break;
		default:
			alert("Tiene 30 o más días.");
			break;
	}
}