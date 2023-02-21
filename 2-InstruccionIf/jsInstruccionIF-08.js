/*
Esteban Juan Amén
	Div - F
Ejercicio 8 - IF;
*/
function mostrar() {
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById('txtIdEdad').value);
	estadoCivil = document.getElementById('estadoCivil').value;

	if (edad > 17 && estadoCivil == "Soltero") {
		alert("Usted es soltero y no es menor!!")
	}
}