function mostrar() {
	let destino;

	destino = document.getElementById('txtIdDestino').value;

	switch (destino) {
		case "Bariloche":
			alert(`${destino} queda en el ESTE!`);
			break;
		case "Cataratas":
			alert(`${destino} queda en el NORTE!`);
			break;
		case "Ushuaia":
			alert(`${destino} queda en el SUR!`);
			break;
		default:
			alert(`${destino} queda en el OESTE!`);
			break;
	}
}