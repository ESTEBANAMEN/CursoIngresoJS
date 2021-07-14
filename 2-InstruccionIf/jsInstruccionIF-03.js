/*IF3 SIN USO DE "ELSE".
Esteban Amen
Al ingresar una edad debemos informar si la persona 
es mayor de edad, sino informar que es un menor de edad.
*/
function mostrar()
{
	var edad

	edad=document.getElementById('txtIdEdad').value;

	if(edad>17)
	{
		alert("Usted es Mayor de Edad");
	}
	/*else
	{
		alert("Usted es Menor de Edad")
	}*/
	/*if(edad<18)
	{
		alert("Usted es Menor de Edad");
		
	}*/
	//Otra Opción de menoria de edad:
	if(edad<=17)
	{
		alert("Usted es Menor de Edad");
	}
}