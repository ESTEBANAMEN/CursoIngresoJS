/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	
	var nombre;
	var mensaje;

	//nombre="Esteban";
	nombre=prompt("Ingrese su nombre");
	mensaje="Su nombre es "+nombre;

	alert(mensaje);

}

