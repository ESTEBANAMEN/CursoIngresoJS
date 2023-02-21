function mostrar() {
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let seguir;
	let flagPersonaCaliente = 0;
	let nombrePersonaCaliente;
	let temperaturaPersonaCaliente;
	let contadorMayoresViudos = 0;
	let contadorHombresSolitarios = 0;
	let contadorViejosCalientes = 0;
	let acumuladorEdadHombresSolteros = 0;
	let contadorHombresSolteros = 0;
	let promedioEdadHombresSolteros;

	do {
		nombre = prompt("Ingrese el nombre de la persona");
		edad = parseInt(prompt("Ingrese la edad de la persona:"));
		while (edad < 1 || edad > 100) {
			edad = parseInt(prompt("ERROR!! Ingrese la edad de la persona:"));
		}
		sexo = prompt("Ingrese el sexo de la persona:\nFemenino = f\nMasculino = m");
		while (sexo != 'f' && sexo != 'm') {
			sexo = prompt("ERROR!! Ingrese el sexo de la persona:\nFemenino = f\nMasculino = m");
		}
		estadoCivil = prompt("Ingrese el estado civl de la persona:\nsoltero\ncasado\nviudo");
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("ERROR!! Ingrese el estado civl de la persona:\nsoltero\ncasado\nviudo");
		}
		temperaturaCorporal = parseInt(prompt("Ingrese la temperatura corporal de la persona:"));
		while (temperaturaCorporal < 35 || temperaturaCorporal > 41) {
			temperaturaCorporal = parseInt(prompt("ERROR!! Ingrese la temperatura corporal de la persona:"));
		}

		if (flagPersonaCaliente == 0) {
			nombrePersonaCaliente = nombre;
			temperaturaPersonaCaliente = temperaturaCorporal;
			flagPersonaCaliente = 1;
		} else {
			if (temperaturaCorporal > temperaturaPersonaCaliente) {
				nombrePersonaCaliente = nombre;
				temperaturaPersonaCaliente = temperaturaCorporal;
			}
		}

		if (edad > 17 && estadoCivil == "viudo") {
			contadorMayoresViudos++;
		}

		if (sexo == "m" && estadoCivil != "casado") {
			contadorHombresSolitarios++;
		}

		if (edad > 60 && temperaturaCorporal > 38) {
			contadorViejosCalientes++;
		}

		if (sexo = 'm' && estadoCivil == "soltero") {
			acumuladorEdadHombresSolteros += edad;
			contadorHombresSolteros++;
		}


		seguir = prompt("Desea ingresar otra persona?\nSi = s\nNo = tecla cualquiera");
	} while (seguir == 's');

	promedioEdadHombresSolteros = acumuladorEdadHombresSolteros / contadorHombresSolteros;

	document.write(
		"El nombre de la persona con mas temperatura es: " + nombrePersonaCaliente + "<br><br>" +
		"La cantidad de mayores de edad viudos es de: " + contadorMayoresViudos + "<br><br>" +
		"La cantidad de hombres que hay solteros o viudos es de: "  + contadorHombresSolitarios + "<br><br>" +  
		"La cantidad de personas de la tercera edad con mas de 38°C es: " + contadorViejosCalientes + "<br><br>" +
		"El promedio de edad entre los hombres solteros es de: " + promedioEdadHombresSolteros
		);
}