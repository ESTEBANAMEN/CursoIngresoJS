function mostrar()
{
	var precio
	var porcentaje
	var preciofinal

	precio=prompt("Coloque el precio de su producto");
	precio=parseInt(precio);

	porcentaje=prompt("Ahora, indique el porcentaje de descuento a aplicar");
	porcentaje=parseInt(porcentaje);

	preciofinal=precio-precio*porcentaje/100;

	document.getElementById('elPrecioFinal').value="$"+preciofinal;
}
