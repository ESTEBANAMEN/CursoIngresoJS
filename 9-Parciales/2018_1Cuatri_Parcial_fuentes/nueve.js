function mostrar() {
    let marca;
    let peso;
    let temperatura;
    let temperaturasPar = 0;
    let flagProductoPesado = 0;
    let marcaProductoPesado = 0;
    let pesoProductoPesado = 0;
    let productosFrios = 0;
    let acumuladorPeso = 0;
    let contadorCantidadProductos = 0;
    let proemdioPesoTotal;
    let flagPesoMin = 0;
    let pesoMinimo;


    do {
        marca = prompt("Ingrese la marca del producto:");

        peso = parseFloat(prompt("Ingrese el peso del prdocto (entre 1 y 100 Kg):"));
        while (peso < 1 || peso > 100 || isNaN(peso)) {
            peso = parseFloat(prompt("ERROR!! Ingrese el peso entre 1 y 100 Kg:"));
        }

        temperatura = parseFloat(prompt("Ingrese la temperatura de almacenamiento (entre -30 y 30):"));
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseFloat(prompt("ERROR!!Ingrese la temperatura de almacenamiento (entre -30 y 30):"));
        }

        if (temperatura % 2 == 0 && temperatura != 0) {
            temperaturasPar++;
        }

        if (flagProductoPesado == 0) {
            marcaProductoPesado = marca;
            pesoProductoPesado = peso;
            flagProductoPesado = 1;
        } else if (peso > pesoProductoPesado) {
            marcaProductoPesado = marca;
            pesoProductoPesado = peso;
        }

        if (temperatura < 0) {
            productosFrios++;
        }

        if (flagPesoMin == 0) {
            pesoMinimo = peso;
            flagPesoMin = 1;
        } else if (peso < pesoMinimo) {
            pesoMinimo = peso;
        }

        acumuladorPeso += peso;
        contadorCantidadProductos++;

            seguir = prompt("Desea ingresar otro producto?\nSi = 's'\nNo = tecla cualquiera");
    } while (seguir == 's');

    proemdioPesoTotal = acumuladorPeso / contadorCantidadProductos;

    document.write(
        "La cantidad de Temperaturas pares es de: " + temperaturasPar + "<br>" +
        "La marca dle producto mas pesado es: " + marcaProductoPesado + "<br>" +
        "LA cantidad de productos que se conservan a menos de 0° es: " + productosFrios + "<br>" +
        "El promedio del peso de todos los productos es: " + proemdioPesoTotal + "<br>" +
        "El peso maximo es: " + pesoProductoPesado + "<br>" +
        "El peso minimo es: " + pesoMinimo
        )
}
