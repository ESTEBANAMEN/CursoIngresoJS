function mostrar() {
	let estacion;
	let destino;

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					alert (`Eligió:\nEstación: ${estacion}.\nDestino: ${destino}\nResolución: "SE VIAJA".`);
					break;
				default:
					alert (`Eligió:\nEstación: ${estacion}.\nDestino: ${destino}\nResolución: "NO SE VIAJA".`);
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Mar del plata":
				case "Cataratas":
					alert (`Eligió:\nEstación: ${estacion}.\nDestino: ${destino}\nResolución: "SE VIAJA".`);
					break;
				default:
					alert (`Eligió:\nEstación: ${estacion}.\nDestino: ${destino}\nResolución: "NO SE VIAJA".`);
					break;
			}
			break;
		case "Primavera":
			switch (destino) {
				case "Bariloche":
					alert (`Eligió:\nEstación: ${estacion}.\nDestino: ${destino}\nResolución: " NO SE VIAJA".`);
					break;
				default:
					alert (`Eligió:\nEstación: ${estacion}.\nDestino: ${destino}\nResolución: "SE VIAJA".`);
					break;
			}
			break;
		default:
			alert (`Eligió:\nEstación: ${estacion}.\nDestino: ${destino}\nResolución: "SE VIAJA".`);
			break;
	}
}

// switch (estacion) {
// 	case "Invierno":
// 		if (destino == "Bariloche") {
// 			alert (`Eligió:\nEstación: ${estacion}.\nDestino: ${destino}\nResolución: "SE VIAJA".`);
// 		} else {
// 			alert (`Eligió:\nEstación: ${estacion}.\nDestino: ${destino}\nResolución: "NO SE VIAJA".`);
// 		}
// 		break;
// 	case "Verano":
// 		if (destino == "Mar del plata" || destino == "Cataratas") {
// 			alert (`Eligió:\nEstación: ${estacion}.\nDestino: ${destino}\nResolución: "SE VIAJA".`);
// 		} else {
// 			alert (`Eligió:\nEstación: ${estacion}.\nDestino: ${destino}\nResolución: "NO SE VIAJA".`);
// 		}
// 		break;
// 	case "Primavera":
// 		if (destino == "Bariloche") {
// 			alert (`Eligió:\nEstación: ${estacion}.\nDestino: ${destino}\nResolución: "NO SE VIAJA".`);
// 		} else {
// 			alert (`Eligió:\nEstación: ${estacion}.\nDestino: ${destino}\nResolución: "SE VIAJA".`);
// 		}
// 		break;
// 	default:
// 		alert (`Eligió:\nEstación: ${estacion}.\nDestino: ${destino}\nResolución: "SE VIAJA".`);
// 		break;
// }