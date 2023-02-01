/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	
	let clave;

	clave = prompt("Ingrese la clave para hackear el sistema de segudridad de los EEUU!!");

	while (clave != "utn750") {
		clave = prompt("ERROR!!! Ingrese la clave correcta!!");
	}
	document.write(
		`La clave "${clave}" desbloqueo el sistema de seguridad que abre los chakras de NARUTO!`
	);
}
