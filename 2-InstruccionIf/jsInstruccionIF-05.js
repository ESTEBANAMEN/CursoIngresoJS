/*IF ejerercicio 5
ESTEBAN AMEN
Al ingresar una edad solo debemos
informar si la persona NO es adolescente.
*/
function mostrar()
{
	var edad
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad<13)
	{
		alert("Usted no es un adolescente");
	}
	if(edad>17)
	{
		alert("Usted no es un adolescente");
	}

		
}