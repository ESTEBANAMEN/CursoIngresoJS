/*IF 10:
ESTEBAN AMEN
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	var aleatorio
	var mensaje

	aleatorio=Math.floor(Math.random()*10)+1;

	if(aleatorio>8)
	{
		mensaje=aleatorio+". EXCELENTE";
	}

	else 
	{
		if(aleatorio<4)
		{
			mensaje=aleatorio+". Vamos, la proxima se puede";
		}

		else
		{
			mensaje=aleatorio+". APROBÓ";
		}
	}

	alert(mensaje)
}
