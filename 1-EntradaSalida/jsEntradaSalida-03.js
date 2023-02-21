/*
Esteban Juan Amen Div-F
Ejercicio Integrador 2;
Se ingresará por id el valor de una compra de productos para el hogar. 
Se deberá agregar el iva (21%) y  luego se deberá restar el 5% en concepto 
de compra mayorista. El programa deberá mostrar por alert 
importe bruto, 
el iva, 
el importe con iva, 
el valor del descuento 
y el total a pagar.
*/
function mostrar() {	
	let valor;
	let iva = .21;
	let valorMasIva;
	let descuento = .05;
	let valorTotalConDescuento;

	valor = parseFloat(document.getElementById('txtIdNombre').value);

	valorMasIva = valor + (valor * iva);
	valorTotalConDescuento = valorMasIva - (valorMasIva * descuento);

	alert(
		"Importe Bruto: $" + valor.toFixed(2) +
		"\nEl IVA es: $" + (valor * iva).toFixed(2) +
		"\nEl importe mas IVA es: $" + valorMasIva.toFixed(2) +
		"\nEl valor del descuento es: $" +(valorMasIva * descuento).toFixed(2) +
		"\nEl total a para es: $" + valorTotalConDescuento.toFixed(2)
	);
}