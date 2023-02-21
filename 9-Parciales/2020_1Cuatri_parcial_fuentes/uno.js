
function mostrar() {
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let i = 0;

	let flagAlcoholBarato = 0;
	let precioAlcoholBarato;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let mensajeAlcohol;

	let acumuladorCantidadAlcohol = 0;
	let acumuladorCantidadBarbijo = 0;
	let acumuladorCantidadJabon = 0;
	let acumuladorPrecioAlcohol = 0;
	let acumuladorPrecioBarbijo = 0;
	let acumuladorPrecioJabon = 0;
	let precioMasUnidades;
	let cantidadMasUnidades;
	let promedioMasUnidades;

	for (i; i < 5; i++) {
		tipo = prompt("Ingrese el tipo de producto:\nbarbijo\njabon\nalcohol");
		while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol") {
			tipo = prompt("ERROR!! Ingrese el tipo de producto:\nbarbijo\njabon\nalcohol");
		}

		precio = parseInt(prompt("Ingrese el precio: (entre 100 y 300)"));
		while (!(precio > 99 && precio < 301) || isNaN(precio)) {
			precio = parseInt(prompt("ERROR!! Ingrese el precio: (entre 100 y 300)"));
		}

		cantidad = parseInt(prompt("Ingrese la cantidad: (entre 1 y 1000 inclusives)"));
		while (!(cantidad > 0 && cantidad < 1001) || isNaN(cantidad)) {
			cantidad = parseInt(prompt("EEROR!! Ingrese la cantidad: (entre 1 y 1000 inclusives"));
		}

		marca = prompt("Ingrese la marca:");

		fabricante = prompt("Ingrese el fabricante:");

		if (flagAlcoholBarato == 0 && tipo == "alcohol") {
			precioAlcoholBarato = precio;
			cantidadAlcoholBarato = cantidad;
			fabricanteAlcoholBarato = fabricante;
			flagAlcoholBarato = 1;
		} else {
			if (tipo == "alcohol" && precio < precioAlcoholBarato) {
				precioAlcoholBarato = precio;
				cantidadAlcoholBarato = cantidad;
				fabricanteAlcoholBarato = fabricante;
			}
		}

		switch (tipo) {
			case "alcohol":
				acumuladorCantidadAlcohol += cantidad;
				acumuladorPrecioAlcohol += precio;
				break;
			case "barbijo":
				acumuladorCantidadBarbijo += cantidad;
				acumuladorPrecioBarbijo += precio;
				break;
			case "jabon":
				acumuladorCantidadJabon += cantidad;
				acumuladorPrecioJabon += precio;
				break;
		}
	}

	if ((acumuladorCantidadAlcohol > acumuladorCantidadBarbijo) && (acumuladorCantidadAlcohol > acumuladorCantidadJabon)) {
		precioMasUnidades = acumuladorPrecioAlcohol;
		cantidadMasUnidades = acumuladorCantidadAlcohol;
	} else {
		if (acumuladorCantidadBarbijo > acumuladorCantidadJabon) {
			precioMasUnidades = acumuladorPrecioBarbijo;
			cantidadMasUnidades = acumuladorCantidadBarbijo;
		} else {
			precioMasUnidades = acumuladorPrecioJabon;
			cantidadMasUnidades = acumuladorCantidadJabon;
		}
	}

	promedioMasUnidades = precioMasUnidades / cantidadMasUnidades;

	if (fabricanteAlcoholBarato == undefined) {
		mensajeAlcohol = "No se compro alcohol!!<br>"
	} else {
		mensajeAlcohol = "El mas barato de los alcoholes tine por cantidad: " + cantidadAlcoholBarato + " unidades.<br> Y su fabricante es: " + fabricanteAlcoholBarato + "<br><br>";
	}

	document.write(
		mensajeAlcohol +
		"El tipo con mas unidaes tiene por promedio de compra: $" + promedioMasUnidades.toFixed(2) + " por unidad.<br><br>" +
		"La cantidad total de jabones es de: " + acumuladorCantidadJabon + " unidades."
	)
}