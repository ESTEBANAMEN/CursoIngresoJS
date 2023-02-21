/*
Esteban Juan Amén
	DIV - F
Ejercicio 3 - for;
*/
function mostrar() {
	let i;
	let mensaje = "Hola UTN FRA";

	i = prompt("¿Cuantas veces quiere ver el mensaje?");

	while (isNaN(i)) {
		i = prompt("ERROR!!Ingrese la cantidad deseada de iteraciones:");
	}

	for (i; i > 0; i--) {
		document.write("<b>" + mensaje + "</b>" + " " + i + "<br>")
	}
}