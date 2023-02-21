/*
	Esteban Juan Amén
		Div - F
	Ejercicio 5 - switch;
*/
function mostrar() {
	let hora;

	hora = parseInt(document.getElementById('txtIdHora').value);

	if (hora < 0 || hora > 24 || isNaN(hora)) {
		alert("No es un horario correcto!!");
	}

	switch (hora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana!!");
			break;
		default:
			if (!(hora < 0 || hora > 24 || isNaN(hora))) {
				alert("NO es de mañana!!");
			}
			break;
	}
}