/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo
	var porcentaje
	var aumento

	sueldo=document.getElementById('txtIdSueldo').value;

	sueldo=parseInt(sueldo);

	porcentaje=prompt("colocar porcentaje deseado");

	aumento=sueldo+sueldo*porcentaje/100;

	document.getElementById('txtIdResultado').value=aumento;
}
