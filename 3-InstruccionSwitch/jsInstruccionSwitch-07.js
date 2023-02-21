/*
	Esteban Juan Amén
		Div - F
	Ejercicio 7 - switch;
*/
function mostrar() {
	let destino;

	destino = document.getElementById('txtIdDestino').value;

	switch (destino) {
		case "Bariloche":
			alert("Queda en el OESTE!");
			break;
		case "Cataratas":
			alert("Queda en el NORTE!");
			break;
		case "Mar del plata":
			alert("Queda en el ESTE!");
			break;
		case "Ushuaia":
			alert("Queda en el SUR!");
			break;
	}
}