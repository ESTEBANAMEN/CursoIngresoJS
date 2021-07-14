/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo
	var ancho
	var perimetro
	var hilosdealambre

	largo=document.getElementById('txtIdLargo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseInt(ancho);

	hilosdealambre=3

	perimetro=("Usted debe comprar "+(largo*2+ancho*2)*hilosdealambre+" metros de alambre");

	alert(perimetro);
}

function Circulo () 
{
	var radio
	var perimetro
	var pi
	var hilosdealambre
	var alambretotal
	var mensaje

	radio=document.getElementById('txtIdRadio').value;
	radio=parseInt(radio);

	pi=3.14

	pi=parseFloat(pi)

	perimetro=2*radio*pi;

	hilosdealambre=3;

	alambretotal=perimetro*hilosdealambre;


	mensaje="Usted debe comprar "+alambretotal.toFixed(2)+" metros de alambre";

	alert(mensaje);
}

function Materiales () 
{
	var largo
	var ancho
	var area
	var bolsasdecemento
	var bolsasdecal
	var mensaje

	largo=document.getElementById('txtIdLargo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseInt(ancho);

	area=largo*ancho;

	bolsasdecemento=area*2+" Bolsas de Cemento ";

	bolsasdecal=area*3+" Bolsas de Cal ";

	mensaje="Usted debe comprar "+bolsasdecemento+"y "+bolsasdecal;

	alert(mensaje);
}