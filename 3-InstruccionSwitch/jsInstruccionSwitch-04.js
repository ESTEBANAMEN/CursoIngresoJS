/*
	Esteban Juan Amén
		Div - F
	Ejercicio 4 - switch;
*/
function mostrar() {
	let mes;

	mes = document.getElementById('txtIdMes').value;

	switch (mes) {
		case "Febrero":
			alert("Tiene 28 días (o 29 en caso de año bisiesto).");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 días.");
			break;
		default:
			alert("Tiene 31 días.");
			break;
	}
}