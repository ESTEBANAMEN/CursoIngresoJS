/*
Esteban Juan Amén
	Div - F
Ejercicio 3 - IF;
*/
function mostrar(){
	let edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);

	if (edad > 17) {
		alert("Usted es mayor de edad");
	} else {
		alert("Usted es menor de edad");
	}
}