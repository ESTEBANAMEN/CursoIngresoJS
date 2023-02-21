/*
Esteban Juan Amén
	Div - F
Ejercicio 4 - IF;
*/
function mostrar() {
	let edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);

	if (edad > 12 && edad < 18) {
		alert("Usted es un adolescente!!");
	}
}

/*
if (edad < 18) {
	if (edad > 12) {
		alert("Usted es un adolescente!!");
	}
}
}
*/ 