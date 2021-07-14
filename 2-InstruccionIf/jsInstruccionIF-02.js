/*Esteban Amen
Al ingresar una edad debemos informar solo si la persona
es mayor de edad*/

function mostrar()
{ 
	var edad;

	edad=document.getElementById('txtIdEdad').value;

	if(edad>17)
	{
		alert("usted es mayor de edad");
	}
}