function mostrar() {
    let letra;
    let numero;
    let seguir;
    let numerosPares = 0;
    let numerosImpares = 0;
    let cantidadCeros = 0;
    let promedioPositivos;
    let acumuladorPositivos = 0;
    let cantidadPositivos = 0;
    let sumaNegativos = 0;
    let falgMaxMin = 0;
    let numneroMaximo;
    let letraNumeorMaximo;
    let numeroMinimo;
    let letraNumeorMinimo;

    do {
        letra = prompt("Ingrese una letra:");
        while (!(isNaN(letra))) {
            letra = prompt("ERROR!! Ingrese una letra: ");
        }

        numero = parseFloat(prompt("Ingrese un numero entre el -100 y el 100!!"));

        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseFloat(prompt("ERROR!! Ingrese un numero entre el -100 y el 100!!"));
        }

        if (numero % 2 == 0 && numero != 0) {
            numerosPares++;
        } else if (numero % 2 != 0) {
            numerosImpares++;
        }

        if (numero > 0) {
            acumuladorPositivos += numero;
            cantidadPositivos++;
        } else if (numero < 0) {
            sumaNegativos += numero;
        } else {
            cantidadCeros++;
        }

        if (falgMaxMin == 0) {
            numneroMaximo = numero;
            letraNumeorMaximo = letra;
            numeroMinimo = numero;
            letraNumeorMinimo = letra;
            falgMaxMin = 1;
        } else if (numero > numneroMaximo) {
            numneroMaximo = numero;
            letraNumeorMaximo = letra;
        } else if (numero < numeroMinimo) {
            numeroMinimo = numero;
            letraNumeorMinimo = letra;
        }



        seguir = prompt("Desea ingresar otro numero?\nSi = 's'\nNo = 'tecla cualquiera'");
    } while (seguir == 's');

    promedioPositivos = acumuladorPositivos / cantidadPositivos;

    document.write(
        "La cantidad de numeros pares es de: " + numerosPares + "<br>" +
        "La cantidad de numeros impares es de: " + numerosImpares + "<br>" +
        "La cantidad de ceros es de : " + cantidadCeros + "<br>" +
        "El promedio de todos los números positivos es de: " + promedioPositivos + "<br>" +
        "La suma de todos los negativos es de: " + sumaNegativos + "<br>" +
        "El número maximo es: " + numneroMaximo + " y su letra es: " + letraNumeorMaximo + "<br>" +
        "el número minimo es: " + numeroMinimo + " y su letra es: " + letraNumeorMinimo
    )
}