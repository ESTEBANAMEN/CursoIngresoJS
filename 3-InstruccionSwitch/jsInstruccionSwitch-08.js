function mostrar() {
	let destino;
	destino = document.getElementById('txtIdDestino').value;
	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			alert(`El destino es ${destino} y allí hace FRIO!`);
			break;
		case "Cataratas":
		case "Mar del plata":
			alert(`El destino es ${destino} y allí hace CALOR!`);
			break;
	}
}