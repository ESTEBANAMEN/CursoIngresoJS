function mostrar() {
	let hora;

	hora = parseInt(document.getElementById('txtIdHora').value);

	if (isNaN(hora)) {
		alert(`"${hora}" NO ES UN NUMERO!!`);
	}

	switch (hora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert (`Colocó: ${hora} Hs. y ES DE MAÑANA`);
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert (`Colocó: ${hora} Hs. y ES DE TARDE`);
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			alert (`Colocó: ${hora} Hs. y ES DE NOCHE`);
			break;
		default:
			if (!(isNaN(hora))) {
			alert (`Colocó: ${hora} Hs. y LA HORA NO EXISTE`);
			break;
			}
	}
}