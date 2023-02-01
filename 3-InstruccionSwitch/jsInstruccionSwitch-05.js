function mostrar() {
	let hora;

	hora = parseInt(document.getElementById('txtIdHora').value);

	if (hora < 0 || hora > 24 || isNaN(hora)) {
		alert (`ERROR!! "${hora}" no es un horario correcto!!`);
	}

	switch (hora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert (`Colocó las ${hora} y es de mañana!!`);
			break;
		default:
			if (!(hora < 0 || hora > 24 || isNaN(hora))) {
				alert (`Colocó las ${hora} y NO es de mañana!!`);
				break;
			}
	}
}