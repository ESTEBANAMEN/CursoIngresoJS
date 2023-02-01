/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	
	let numero;

	numero = prompt("Ingrese un numero entre el 0 y el 9!!");

	while (numero < 0 || numero > 9 || isNaN(numero)) {
		numero = prompt("ERROR CARAMBA!! Coloque un numero dentro de los parametros solicitados!! ENTRE EL 0 Y EL 9!!!!!!!!!!!");
	}

	document.getElementById('txtIdNumero').value = `${numero} it's okey`;
}