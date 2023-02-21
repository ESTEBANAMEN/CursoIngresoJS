/*
Esteban Juan Amén - Div F
Ejercicio 10;
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	let importe;
	let resultado;
	let descuento;

	importe = parseInt(txtIdImporte.value);
	descuento = 0.25;

	resultado = importe - (importe * descuento);

	txtIdResultado.value = resultado.toFixed(2);
}