/*
	Esteban Juan Amén
		Div - F
   Ejercicio 4 - while;

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	
	let numero;
	let error = 0;

	// numero = prompt("Ingrese un numero entre el 0 y el 9!!");

	// while (numero < 0 || numero > 9) {
	// 	numero = prompt("ERROR CARAMBA!! Coloque un numero dentro de los parametros solicitados!! ENTRE EL 0 Y EL 9!!!!!!!!!!!");
	// }

	do {
		if (error > 0) {
			alert("ERROR!!");
		}
		
		numero = parseInt(prompt("Ingrese un numero entre el 0 y el 9!!"));
		
		error++;
	} while (!(numero > -1 && numero < 10));

	document.getElementById('txtIdNumero').value = numero + " it's okey";
}