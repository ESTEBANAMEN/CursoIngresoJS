/*
Esteban Juan Amén -Div F
TP N° 1;

Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () {
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;

	precioUno = parseFloat(document.getElementById('txtIdPrecioUno').value);
	precioDos = parseFloat(document.getElementById('txtIdPrecioDos').value);
	precioTres = parseFloat(document.getElementById('txtIdPrecioTres').value);

	suma = precioUno + precioDos + precioTres;

	alert("La suma de los 3 precios es de: $" + suma.toFixed(2));
}
function Promedio () {
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let promedio

	precioUno = parseFloat(document.getElementById('txtIdPrecioUno').value);
	precioDos = parseFloat(document.getElementById('txtIdPrecioDos').value);
	precioTres = parseFloat(document.getElementById('txtIdPrecioTres').value);

	suma = precioUno + precioDos + precioTres;

	promedio = suma / 3;

	alert("El promedio entre los 3 precios es de: $" + promedio);

}
function PrecioFinal () {
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let iva = 1.21;
	let precioFinal;

	precioUno = parseFloat(document.getElementById('txtIdPrecioUno').value);
	precioDos = parseFloat(document.getElementById('txtIdPrecioDos').value);
	precioTres = parseFloat(document.getElementById('txtIdPrecioTres').value);

	suma = precioUno + precioDos + precioTres;
	
	precioFinal = suma * iva;

	alert("El precio final mas IVA es de: $" + precioFinal.toFixed(2));
}