function mostrar() {

	let i;
	let mensaje = "Hola UTN FRA";

	i = prompt("Ingrese la cantidad deseada de iteraciones:");

	while (isNaN(i)) {
		i = prompt("ERROR!!Ingrese la cantidad deseada de iteraciones:");
	}

	for (i ; i > 0 ; i--) {
		document.write("<b>" + mensaje + "</b>" + " " + i + "<br>")
	}
}