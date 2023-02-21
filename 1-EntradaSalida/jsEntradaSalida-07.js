/*
Esteban Juan Amén
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar() {

	let numero1;
	let numero2;
	let suma;

	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);
	suma = numero1 + numero2;

	alert("La suma es: " + suma);
}

function restar() {

	let numero1;
	let numero2;
	let resta;

	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);
	resta = numero1 -numero2;

	alert("La resta es: " + resta);
}

function multiplicar(){

	let numero1;
	let numero2;
	let producto;

	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);
	producto = numero1 * numero2;

	alert("El producto es: " + producto);
}

function dividir() {
	
	let numero1;
	let numero2;
	let division;

	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);
	division = numero1 / numero2;

	alert("La division da: " + division);
}