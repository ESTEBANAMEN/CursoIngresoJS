function mostrar() {
	let mes;

	mes = document.getElementById('txtIdMes').value;

	switch (mes) {
		case "Febrero":
			alert (`El mes de ${mes} tiene 28 días (o 29 en caso de año bisiesto).`);
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert (`El mes de ${mes} tiene 30 días.`);
			break;
		default:
			alert (`El mes de ${mes} tiene 31 días.`);
			break;
	}
}