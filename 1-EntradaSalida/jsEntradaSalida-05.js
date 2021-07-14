/*
Esteban Amen
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var apellido;
	var edad;
	var mensaje;

	nombre=document.getElementById('txtIdNombre').value;
	apellido=prompt("Ingrese su apellido");
	edad=document.getElementById('txtIdEdad').value;

	mensaje="Su nombre es "+nombre+ " "+apellido+" y su edad "+edad+ " años";
	alert(mensaje);



}

