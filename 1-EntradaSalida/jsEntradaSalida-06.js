/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var num1
	var num2
	var resultado

	//se extrae el valor de la caja ID
	num1=document.getElementById('txtIdNumeroUno').value;
	//se transforma de cadena a numero
	num1=parseInt(num1);
	//se extrae el valor de la caja ID
	num2=document.getElementById('txtIdNumeroDos').value;
	//se transforma de cadena a numero
	num2=parseInt(num2);
	//se suman ambos valores ya transformados en numero
	resultado=num1+num2;
	
	alert(resultado);

}

