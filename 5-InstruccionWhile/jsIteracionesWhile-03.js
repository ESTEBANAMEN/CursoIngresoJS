/*
	Esteban Juan Amén
		Div - F
   Ejercicio 3 - while;

al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	let clave;

	clave = prompt("Ingrese la clave de ingreso:");

	while (clave != "utn750") {
		clave = prompt("ERROR!!! Ingrese la clave correcta!!");
	}
	alert("Clave correcta, Bienvenido!!");
}