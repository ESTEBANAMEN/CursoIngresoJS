function mostrar() {
    let precio;
    let descuento;
    let precioFinal;

    precio = parseFloat(prompt("Ingrese el precio del producto:"));
    descuento = parseFloat(prompt("Ingrese el descuento del a aplicar"));

    precioFinal = precio - (precio * descuento / 100);

    document.getElementById('elPrecioFinal').value = "$" + precioFinal;
}
