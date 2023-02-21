/*
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos
de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar() {
    let tipo;
    let cantidad;
    let precio;
    let seguir;
    let descuento;
    let cantidadTotal = 0;
    let acumuladorPrecio = 0;
    let importeTotalConDescuento;
    let acumuladorArena = 0;
    let acumuladorCal = 0;
    let acumuladorCemento = 0;
    let tipoConMasCantidad;
    let acumuladorPrecioArena = 0;
    let acumuladorPrecioCal = 0;
    let acumuladorPrecioCemento = 0;
    let tipoMasCaro;

    do {
        tipo = prompt("Ingrese el tipo de p´rodcuto:\narena\ncal\ncemento");
        while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
            tipo = prompt("ERROR!! Ingrese el tipo de p´rodcuto:\narena\ncal\ncemento");
        }

        cantidad = parseInt(prompt("Ingrese la cantidad de bolsas: (mayor a 0)"));
        while (cantidad < 1) {
            cantidad = parseInt(prompt("ERROR!! Ingrese la cantidad de bolsas: (mayor a 0)"));
        }

        precio = parseInt(prompt("Ingrese el precio por bolsa: (mas de 0)"));
        while (precio < 1) {
            precio = parseInt(prompt("ERROR!! Ingrese el precio por bolsa: (mas de 0)"));
        }

        cantidadTotal += cantidad;

        if (cantidadTotal > 30) {
            descuento = .25;
        } else {
            if (cantidadTotal > 10) {
                descuento = .15;
            } else {
                descuento = 0;
            }
        }

        acumuladorPrecio += precio;

        switch (tipo) {
            case "arena":
                acumuladorArena += cantidad;
                acumuladorPrecioArena += precio;
                break;
            case "cal":
                acumuladorCal += cantidad;
                acumuladorPrecioCal += precio;
                break;
            case "cemento":
                acumuladorCemento += cantidad;
                acumuladorPrecioCemento += precio;
                break;
        }


        seguir = prompt("Desea ingresar otro producto?\nSi = 's'.\nNo = tecla cualquiera.");
    } while (seguir == 's');

    if (descuento != 0) {
        importeTotalConDescuento = acumuladorPrecio - acumuladorPrecio * descuento;
        mensajeDescuento = "El importe total con descuenrto es: $" + importeTotalConDescuento + "<br><br>";
    } else {
        mensajeDescuento = "---" + "<br><br>";
    }

    if ((acumuladorArena > acumuladorCal) && (acumuladorArena > acumuladorCemento)) {
        tipoConMasCantidad = "Arena";
    } else {
        if (acumuladorCal > acumuladorCemento) {
            tipoConMasCantidad = "Cal";
        } else {
            tipoConMasCantidad = "Cemento";
        }
    }

    if ((acumuladorPrecioArena > acumuladorPrecioCal) && (acumuladorPrecioArena > acumuladorPrecioCemento)) {
        tipoMasCaro = "Arena";
    } else {
        if (acumuladorPrecioCal > acumuladorPrecioCemento) {
            tipoMasCaro = "Cal";
        } else {
            tipoMasCaro = "Cemento";
        }
    }

    document.write(
        "El importe total, bruto y sin descuento a pagar es: $" + acumuladorPrecio + "<br><br>" +
        mensajeDescuento +
        "El tipo con mas casntidad de bolsas es: " + tipoConMasCantidad + "<br><br>" +
        "El tipo mas caro es: " + tipoMasCaro
    );
}