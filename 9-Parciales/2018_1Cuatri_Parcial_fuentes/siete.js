function mostrar() {
    let nota;
    let sexo;
    let i = 0;
    let acumuladorNotas = 0;
    let promedioTotal;
    let flagNotaBaja = 0;
    let notaBaja;
    let sexoNotaBaja;
    let varonesMasDeSeis = 0;

    for (i ; i < 5; i++) {
        nota = prompt("Ingrese la nota (entre 0 y 10):");
        
        while (nota < 0 || nota > 10 || isNaN(nota)) {
            nota = prompt("ERROR!! Ingrese la nota dentro de los parametros solicitados:");
        }

        acumuladorNotas += parseFloat(nota);

        sexo = prompt("Ingrese su sexo: 'm' para masculino y 'f' para femenino.");
        while (sexo!= "m" && sexo!= "f") {
            sexo = prompt("ERROR!! Ingrese su sexo: 'm' para masculino y 'f' para femenino.");
        }
        
        if (flagNotaBaja == 0) {
            notaBaja = nota;
            sexoNotaBaja = sexo;
            flagNotaBaja = 1;
        } else if (nota < notaBaja) {
            notaBaja = nota;
            sexoNotaBaja = sexo;
        }

        if (sexo == 'm' && nota > 5) {
            varonesMasDeSeis++;
        }
    }

    promedioTotal = acumuladorNotas / 5;

    alert(
        "El promedio de las notas totales es de: " + promedioTotal +
        "\nLa nota mas baja fue: " + notaBaja + ". Y el sexo de la persona que saco esa nota es: " + sexoNotaBaja +
        "\nLa cantidad de varones con nota mayor o igual a 6 es de: " + varonesMasDeSeis
    );
}
