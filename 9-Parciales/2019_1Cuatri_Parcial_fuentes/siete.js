function mostrar() {
    let altura;
    let sexo;
    let i = 0;

    let acumuladorAlturas = 0;
    let promedioTotalAlturas;

    let flagAlturaBaja = 0;
    let alturaBaja;
    let sexoAlturaBaja;

    let mujeresAltas = 0;

    for (i; i < 5; i++) {
        altura = parseFloat(prompt("Ingrese su altura en Cm:"));
        while (altura < 0 || altura > 250 || isNaN(altura)) {
            altura = parseFloat(prompt("ERROR!! Ingrese su altura en Cm:"));
        }

        sexo = prompt("Ingrese su sexo: 'm' para masculino y 'f' para femenino.");
        while (sexo != "m" && sexo != "f") {
            sexo = prompt("ERROR!! Ingrese su sexo: 'm' para masculino y 'f' para femenino.");
        }

        acumuladorAlturas += altura;

        if (flagAlturaBaja == 0) {
            alturaBaja = altura;
            sexoAlturaBaja = sexo;
            flagAlturaBaja = 1;
        } else if (altura < alturaBaja) {
            alturaBaja = altura;
            sexoAlturaBaja = sexo;
        }

        if (sexo == 'f' && altura > 190) {
            mujeresAltas++;
        }
    }

    promedioTotalAlturas = acumuladorAlturas / 5;

    alert(
        "El promedio de las alturas totales es de: " + promedioTotalAlturas + "Cm" +
        "\nLa altura mas baja ingresada fue: " + alturaBaja + " Cm y su sexo correspondiente: " +sexoAlturaBaja +
        "\nLa cantidad de mujeres que su altura superó los 190 Cm fue de: " + mujeresAltas
    );
}
