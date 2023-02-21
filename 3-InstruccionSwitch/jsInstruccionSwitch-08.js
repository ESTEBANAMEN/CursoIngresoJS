/*
	Esteban Juan Amén
		Div - F
	Ejercicio 8 - switch;
*/
function mostrar() {
	let destino;

	destino = document.getElementById('txtIdDestino').value;
	
	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			alert("Hace FRIO!!");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace CALOR!");
			break;
	}
}