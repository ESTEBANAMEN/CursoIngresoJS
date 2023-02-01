function mostrar() {
	let mes;

	mes = document.getElementById('txtIdMes').value;

	switch (mes) {
		case "Julio":
		case "Agosto":
			alert (`Estamos en ${mes}: Abrigate que hace frio!!`);
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert (`Estamos en ${mes}: Ya pasamos el frio, ahora calor!!`)
			break;
		default:
			alert (`Estamos en ${mes}: Falta poco para el invierno!!`);
			break;
	}
}