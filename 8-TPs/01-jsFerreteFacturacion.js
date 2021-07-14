/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1
	var precio2
	var precio3
	var sumatotal

	precio1=document.getElementById('txtIdPrecioUno').value;

	precio1=parseFloat(precio1);

	precio2=document.getElementById('txtIdPrecioDos').value;

	precio2=parseFloat(precio2);

	precio3=document.getElementById('txtIdPrecioTres').value;

	precio3=parseFloat(precio3);

	sumatotal=precio1+precio2+precio3;

	alert(sumatotal);
}

function Promedio () 
{
	var precio1
	var precio2
	var precio3
	var promedio

	precio1=document.getElementById('txtIdPrecioUno').value;

	precio1=parseInt(precio1);

	precio2=document.getElementById('txtIdPrecioDos').value;

	precio2=parseInt(precio2);

	precio3=document.getElementById('txtIdPrecioTres').value;

	precio3=parseInt(precio3);

	promedio=(precio1+precio2+precio3)/3;

	alert(promedio);
}


function PrecioFinal () 
{
	var precio1
	var precio2
	var precio3
	var suma
	var masIVA

	precio1=document.getElementById('txtIdPrecioUno').value;

	precio1=parseInt(precio1);

	precio2=document.getElementById('txtIdPrecioDos').value;

	precio2=parseInt(precio2);

	precio3=document.getElementById('txtIdPrecioTres').value;

	precio3=parseInt(precio3);

	suma=precio1+precio2+precio3;

	masIVA=suma+suma*21/100;

	alert(masIVA);
}