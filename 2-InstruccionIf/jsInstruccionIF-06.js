/*IF ejercicio 6:
ESTEBAN AMEN
Al ingresar una edad debemos informar si la persona
es mayor de edad (mas de 18 años), adolescente
(entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	var edad
//Ingreso de datos
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);/*

//Mayoria de edad
	if(edad>17)
	{
		alert("Usted es mayor de edad");
	}

//Adolescencia
	if(edad>12)
	{
		if (edad<18)
		{
			alert("Usted es un adolescente");
		}
	}

//Niñez/Infancia
	if(edad<13)
	{
		alert("Usted es un niño");
	}*/

	if(edad>17&&edad<101)
	{
		alert("Usted es mayor de edad");
	}
	else if(edad>12&&edad<18)
	{
		alert("Usted es un adolescente");
	}
	else if(edad<13)
	{
		alert("Usted es un niño");
	}
	else 
	{
		alert("Usted seguro esta muerto");
	}
}