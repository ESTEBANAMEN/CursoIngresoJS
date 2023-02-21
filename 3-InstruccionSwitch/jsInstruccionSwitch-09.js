/*
	Esteban Juan Amén
		Div - F
	Ejercicio 9 - switch;
*/
function mostrar() {
	let estacion;
	let destino;
	let precioBase = 15.000;
	let porcentaje;
	let precioFinal;

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;

	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				porcentaje = 1.2;
			} else {
				if (destino == "Mar del plata") {
					porcentaje = .8;
				} else {
					porcentaje = .9;
				}
			}
			break;
		case "Verano":
			if (destino == "Bariloche") {
				porcentaje = .8;
			} else {
				if (destino == "Mar del plata") {
					porcentaje = 1.2;
				} else {
					porcentaje = 1.1;
				}
			}
			break;
		default:
			if (destino == "Cordoba") {
				porcentaje = 1;
			} else {
				porcentaje = 1.1;
			}
			break;
	}

	precioFinal = precioBase * porcentaje;

	alert(
		"Su viaje elegido es: " +
		"\nEstación: " + estacion +
		"\nDestino: " + destino +
		"\nPrecio Final: $" + precioFinal.toFixed(3)
	);
}