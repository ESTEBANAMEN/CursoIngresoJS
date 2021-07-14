/*IF 8:
ESTEBAN AMEN
Al ingresar una edad menor a 18 años y un estado civil
distinto a "Soltero", NO HACER NADA, pero si no es asi,
y es soltero y no es menor, mostrar el siguiente mensaje:
'Es soltero y no es menor.'
*/
function mostrar()
{
	var	edad
	var estadocivil

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	estadocivil=document.getElementById('estadoCivil').value;

	if(edad>17)
	{
		if (estadocivil=="Soltero")
		{
			alert("Es soltero y no es menor");
		}
	}
}