/*
	Esteban Juan Amén
		Div - F
	Ejercicio 2 - switch;
*/
function mostrar() {
	let mes;

	mes = document.getElementById('txtIdMes').value;

	switch (mes) {
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio!!");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!");
			break;
		default:
			alert("Falta poco para el invierno!!");
			break;
	}
}