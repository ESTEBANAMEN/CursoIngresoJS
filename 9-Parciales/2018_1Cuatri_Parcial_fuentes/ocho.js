function mostrar() {
    let letra;
    let numero;
    let numerosPares = 0;
    let cantidadCeros = 0;
    let numerosImpares = 0;
    let acumuladorPositivos = 0;
    let cantidadPositivos = 0;
    let acumuladorNegativos = 0;
    let flagMaxMin = 0;
    let letraNumeroMaximo;
    let numeroMaximo;
    let letraNumeroMinimo;
    let numeroMinimo;


    do {
        letra = prompt("Ingrese una letra: ");

        while(!(isNaN(letra))) {
            letra = prompt("ERROR!! Ingrese una letra: ");
        }

        numero = parseFloat(prompt("Ingrese un numero entre el -100 y el 100!!"));

        while(numero < -100 || numero > 100 ||  isNaN(numero)) {
            numero = parseFloat(prompt("ERROR!! Ingrese un numero entre el -100 y el 100!!"));
        }

        if(numero % 2 == 0 && numero != 0) {
            numerosPares++;
        } else if (numero == 0) {
            cantidadCeros++;
        } else {
            numerosImpares++;
        }

        if(numero > 0) {
            acumuladorPositivos += parseFloat(numero);
            cantidadPositivos++;
        } else {
            acumuladorNegativos += parseFloat(numero);
        }

        if(flagMaxMin == 0) {
            letraNumeroMaximo = letra;
            numeroMaximo = numero;
            letraNumeroMinimo = letra;
            numeroMinimo = numero;
            flagMaxMin = 1;
        } else if (numero > numeroMaximo) {
            letraNumeroMaximo = letra;
            numeroMaximo = numero;
        } else if (numero < numeroMinimo) {
            letraNumeroMinimo = letra;
            numeroMinimo = numero;
        }

        seguir = prompt("Desea ingresar otra letra y otro numero?\nSi = 's'\nNo = letra cualquiera");
    } while(seguir == 's');

    promedioPositivos = acumuladorPositivos / cantidadPositivos;

    alert(
        "La cantidad de numeros pares es de: " + numerosPares +
        "\nLa cantidad de numeros impares es de: " + numerosImpares +
        "\nLa cantidad de ceros es de: " + cantidadCeros +
        "\nEl promedio de positivos es de: " + promedioPositivos +
        "\nLa suma de los negativos es de: " +acumuladorNegativos +
        "\nEl maximo numero ingresado es: " + numeroMaximo + " y su letra es: " + letraNumeroMaximo +
        "\nEl minimo numero ingresado es: " + numeroMinimo + " y su letra es: " + letraNumeroMinimo
    )
}
