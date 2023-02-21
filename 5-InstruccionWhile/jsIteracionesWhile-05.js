/*
	Esteban Juan Amén
		Div - F
   Ejercicio 5 - while;

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let sexo;

	sexo = prompt("Ingrese su sexo: 'm' para masculino y 'f' para femenino.");

	while (sexo != 'm' && sexo != 'f') {
		sexo = prompt("ERROR!! Ingrese su sexo: 'm' para masculino y 'f' para femenino.");
	}

	if (sexo == 'm') {
		document.getElementById('txtIdSexo').value = "Usted es un machirulo opresor!!";
	} else {
		document.getElementById('txtIdSexo').value = "Usted es una femina empoderada!!";
	}
} 