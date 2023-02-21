function mostrar() {
    let pais;
    let cantidadHabitantes;
    let temperaturaMinima;
    let seguir;
    let temperaturasPares = 0;
    let flagPaisMenosHabitantes = 0;
    let paisMenosHabitantes;
    let cantidadMenosHabitantes;
    let paisesCalientes = 0;
    let promedioHabitantesTotal;
    let acumuladorHabitanes = 0;
    let cantidadDePaises = 0;
    let flgaTemperaturaMinima = 0;
    let temepraturaMinimaIngresada;
    let paisFrio;

    do {
        pais = prompt("Ingrese el país:");

        cantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes en millones (entre 1 y 7000):"));
        while (cantidadHabitantes < 1 || cantidadHabitantes > 7000 || isNaN(cantidadHabitantes)) {
            cantidadHabitantes = parseInt(prompt("ERROR!! Ingrese la cantidad de habitantes en millones (entre 1 y 7000):"));
        }

        temperaturaMinima = parseInt(prompt("Ingrese la temperatura minima del pais (entre -50 y 50)"));
        while (temperaturaMinima < -50 || temperaturaMinima > 50 || isNaN(temperaturaMinima)) {
            temperaturaMinima = parseInt(prompt("ERROR!! Ingrese la temperatura minima del pais (entre -50 y 50)"));
        }

        if (temperaturaMinima % 2 == 0) {
            temperaturasPares++;
        }

        if (flagPaisMenosHabitantes == 0) {
            paisMenosHabitantes = pais;
            cantidadMenosHabitantes = cantidadHabitantes;
            flagPaisMenosHabitantes = 1;
        } else if (cantidadHabitantes < cantidadMenosHabitantes) {
            cantidadMenosHabitantes = cantidadHabitantes;
            paisMenosHabitantes = pais;
        }

        if (temperaturaMinima > 40) {
            paisesCalientes++;
        }

        if (flgaTemperaturaMinima == 0) {
            temepraturaMinimaIngresada = temperaturaMinima;
            paisFrio = pais;
            flgaTemperaturaMinima = 1;
        } else if (temperaturaMinima < temepraturaMinimaIngresada) {
            temepraturaMinimaIngresada = temperaturaMinima;
            paisFrio = pais;
        }

        acumuladorHabitanes += cantidadHabitantes;
        cantidadDePaises++;

        seguir = prompt("Desea ingresar otro pais?\nSi = 's'\nNo = 'tecla cualquiera'");
    } while (seguir == 's');

    promedioHabitantesTotal = acumuladorHabitanes / cantidadDePaises;

    document.write(
        "La cantidad de temperaturas pares es de: " + temperaturasPares + "<br>" +
        "El nombre del pais con menos habitantes es: " + paisMenosHabitantes + "<br>" +
        "La cantidad de paises que superan los 40°C es: " + paisesCalientes + "<br>" +
        "El promedio de habitantes entre los paises ingresados es: " + promedioHabitantesTotal + "<br>" +
        "La temperatura minima ingresada fue: " + temepraturaMinimaIngresada + "°C" + " y el nombre del pais correspondiente es: " + paisFrio
    )
}
