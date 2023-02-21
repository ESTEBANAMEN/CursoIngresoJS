/*
	Esteban Juan Amén
		Div - F
	Ejercicio 10 - switch;
*/
function mostrar() {
	let estacion;
	let destino;

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					alert("SE VIAJA");
					break;
				default:
					alert("NO SE VIAJA");
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Mar del plata":
				case "Cataratas":
					alert("SE VIAJA");
					break;
				default:
					alert("NO SE VIAJA");
					break;
			}
			break;
		case "Primavera":
			switch (destino) {
				case "Bariloche":
					alert("NO SE VIAJA");
					break;
				default:
					alert("SE VIAJA");
					break;
			}
			break;
		default:
			alert("SE VIAJA");
			break;
	}

	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				alert("SE VIAJA");
			} else {
				alert("NO SE VIAJA");
			}
			break;
		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas") {
				alert("SE VIAJA");
			} else {
				alert("NO SE VIAJA");
			}
			break;
		case "Primavera":
			if (destino == "Bariloche") {
				alert("NO SE VIAJA");
			} else {
				alert("SE VIAJA");
			}
			break;
		default:
			alert("SE VIAJA");
			break;
	}
}