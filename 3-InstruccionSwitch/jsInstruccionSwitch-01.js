function mostrar()
{
	let mes;

	mes = document.getElementById('txtIdMes').value;

	switch (mes) {
		case "Enero":
			alert (`Es ${mes}: que comiences bien el año!!`);
			break;
		case "Marzo":
			alert (`Es ${mes}: a clases!!`);
			break;
		case "Julio":
			alert (`Es ${mes}: se vienen las vacaciones!!`);
			break;
		case "Diciembre":
			alert (`Es ${mes}: Felices fiestas!!`);
			break;
		}
}