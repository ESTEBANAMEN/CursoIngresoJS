/*
Esteban Juan Amén
	Div - F
Ejercicio 6 - IF;
*/
function mostrar() {
	let edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);

	if (edad > 17) {
		alert("Usted es mayor de edad!!");
	} else {
		if (edad < 13) {
			alert("Usted es un niño!!");
		} else {
			alert("Usted es un adolescente!!");
		}
	}
}