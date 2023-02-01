function mostrar() {
	let mes;

	mes = document.getElementById('txtIdMes').value;

	switch (mes) {
		case ("Febrero"):
			alert (`Estamos en ${mes} y no tiene mas de 29 días.`);
			break;
		default:
			alert (`Estamos en ${mes} y tiene 30 o más días.`);
			break;
	}
}