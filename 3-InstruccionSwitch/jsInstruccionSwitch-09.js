function mostrar() {
	let estacion;
	let destino;
	let precioBase = 15.000;
	let precioFinal;

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;

	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				precioFinal = precioBase + (precioBase * .2);
			} else if (destino == "Mar del plata") {
				precioFinal = precioBase - (precioBase * .2);
			} else {
				precioFinal = precioBase - (precioBase * .1);
			}
			break;
		case "Verano":
			if (destino  == "Bariloche") {
				precioFinal = precioBase - (precioBase * .2);
			} else if (destino == "Mar del plata") {
				precioFinal = precioBase + (precioBase * .2);
			} else {
				precioFinal = precioBase + (precioBase * .1);
			}
			break;
		default:
			if (destino == "Cordoba") {
				precioFinal = precioBase
			} else {
				precioFinal = precioBase + (precioBase * .1);
			}
			break;
	}

	alert (
		`Su viaje elegido es:
		\nEstación: ${estacion}.
		\nDestino: ${destino}.
		\nPrecio Final: $${precioFinal.toFixed(3)}`
	);
}