/*IF 9:
ESTEBAN AMEN
Al presionar el Botón, 
mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{
	var aleatorio
	aleatorio=Math.floor(Math.random() * 10) + 1;

	alert("El numerito feo es "+aleatorio);
}