/*
Esteban Juan Amén
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {

	let numero1;
	let numero2;
	let suma;

	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);

	suma = numero1 + numero2;

	alert("La suma es: " + suma);
}