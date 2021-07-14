/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1
	var num2

	num1=document.getElementById('txtIdNumeroUno').value;
	num2=document.getElementById('txtIdNumeroDos').value;
	num1=parseInt(num1);
	num2=parseInt(num2);
	resultado=num1+num2;
	alert("La suma es: "+resultado);
}
	
function restar()
{
	var num1
	var num2

	num1=document.getElementById('txtIdNumeroUno').value;
	num2=document.getElementById('txtIdNumeroDos').value;
	num1=parseInt(num1);
	num2=parseInt(num2);
	resultado=num1-num2;
	alert("La resta es: "+resultado);
}

function multiplicar()
{ 
	var num1
	var num2

	num1=document.getElementById('txtIdNumeroUno').value;
	num2=document.getElementById('txtIdNumeroDos').value;
	num1=parseInt(num1);
	num2=parseInt(num2);
	resultado=num1*num2;
	alert("El producto es: "+resultado);
}

function dividir()
{
	var num1
	var num2

	num1=document.getElementById('txtIdNumeroUno').value;
	num2=document.getElementById('txtIdNumeroDos').value;
	num1=parseInt(num1);
	num2=parseInt(num2);
	resultado=num1/num2;
	alert("La división es: "+resultado);
}

