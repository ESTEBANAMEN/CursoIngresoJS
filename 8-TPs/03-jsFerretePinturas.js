/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura1
	var temperatura2

	temperatura1=document.getElementById('txtIdTemperatura').value;
	temperatura1=parseInt(temperatura1);

	temperatura2=(temperatura1-32)*5/9;

	mensaje=temperatura1+" °F equivalen a "+temperatura2.toFixed(2)+" °C";

	alert(mensaje);
}

function CentigradosFahrenheit () 
{
	var temperatura1
	var temperatura2

	temperatura1=document.getElementById('txtIdTemperatura').value;
	temperatura1=parseInt(temperatura1);

	temperatura2=(temperatura1*9/5)+32;

	mensaje=temperatura1+" °C equivalena a "+temperatura2+" °F";

	alert(mensaje);
}
