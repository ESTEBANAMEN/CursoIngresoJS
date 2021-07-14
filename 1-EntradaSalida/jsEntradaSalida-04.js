/* 
Esteban Amen
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{ 
	var nombre;
	var apellido;
	var mensaje;

	nombre=prompt("Ingrese su nombre");
	apellido=prompt("Ingrese su apellido");
	mensaje="Sos un kapo " +nombre+ " "+apellido;
	document.getElementById('txtIdNombre').value=mensaje;

	
}

