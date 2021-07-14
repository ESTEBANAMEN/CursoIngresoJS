/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe
	var porcentaje
	var descuento

	importe=document.getElementById('txtIdImporte').value;

	importe=parseInt(importe);

	porcentaje=prompt("ingrese porcentaje deseado");

	descuento=importe-importe*porcentaje/100;

	document.getElementById('txtIdResultado').value=descuento;
}
