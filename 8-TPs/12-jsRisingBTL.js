/*
		Esteban Juan Amén
			DIV - F
TP N° 12 - Validar Datos con while;

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas 
y censos nos pide realizar una carga de datos validada e ingresada por ventanas 
emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla 
a cuadros de textos. 
12.   Los datos requeridos son los siguientes:

A.	Edad, entre 18 y 90 años inclusive.

B.	Sexo, “M” para masculino y “F” para femenino

C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados
y 4-para viudos

D.	Sueldo bruto, no menor a 8000.

E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.

F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.

*/
function ComenzarIngreso() {
	let edad;
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let legajo;
	let nacionalidad;

	edad = parseInt(prompt("Ingrese su edad: (entre 18 y 90 inclusives)"));
	while ((!(edad > 17 || edad > 91)) || isNaN(edad)) {
		edad = parseInt(prompt("ERROR!! Ingrese su edad: (entre 18 y 90 inclusives)"));
	}

	sexo = prompt("Ingrese su sexo: \nMasculino = M/m\nFemenino = F/f");
	while (sexo != 'M' && sexo != 'm' && sexo != 'F' && sexo != 'f') {
		sexo = prompt("ERROR!! Ingrese su sexo: \nMasculino = M/m\nFemenino = F/f");
	}

	estadoCivil = parseInt(prompt("Ingrese su estado civil:\nsoltero = 1\ncasado = 2\ndivorciado = 3\nviudos = 4"));
	while ((estadoCivil != 1 && estadoCivil != 2 && estadoCivil != 3 && estadoCivil != 4) || isNaN(estadoCivil)) {
		estadoCivil = parseInt(prompt("ERROR!! Ingrese su estado civil:\nsoltero = 1\ncasado = 2\ndivorciado = 3\nviudos = 4"));
	}

	sueldoBruto = parseInt(prompt("Ingrese su sueldo bruto: (no menor a 8000)"));
	while (sueldoBruto < 8000 || isNaN(sueldoBruto)) {
		sueldoBruto = parseInt(prompt("ERROR!! Ingrese su sueldo bruto: (no menor a 8000)"));
	}

	legajo = parseInt(prompt("Ingrese su número de legajo: (sin letras ni ceros a la izquierda)"));
	while (isNaN(legajo) || legajo < 1000 || legajo > 9999) {
		legajo = parseInt(prompt("ERROR!! Ingrese su número de legajo: (sin letras ni ceros a la izquierda)"));
	}

	nacionalidad = prompt("Ingrese su nacionalidad:\nPara Aregntinos = 'A'\nPara Extranjeros = 'E'\nPara Nacionalizados = 'N'");
	while (nacionalidad != 'a' && nacionalidad != 'A' && nacionalidad != 'e' && nacionalidad != 'E' && nacionalidad != 'n' && nacionalidad != 'N') {
		nacionalidad = prompt("ERROR!! Ingrese su nacionalidad:\nPara Aregntinos = 'A'\nPara Extranjeros = 'E'\nPara Nacionalizados = 'N'");
	}

	document.getElementById('txtIdEdad').value = "Edad: " + edad + " años.";

	if (sexo == 'm' || sexo == 'M') {
		document.getElementById('txtIdSexo').value = "Sexo: Masculino.";
	} else {
		document.getElementById('txtIdSexo').value = "Sexo: Femenino.";
	}

	if (estadoCivil == 1) {
		document.getElementById('txtIdEstadoCivil').value = "Estado Civil: Soltero.";
	} else {
		if (estadoCivil == 2) {
			document.getElementById('txtIdEstadoCivil').value = "Estado Civil: Casado.";
		} else {
			if (estadoCivil == 3) {
				document.getElementById('txtIdEstadoCivil').value = "Estado Civil: Divorciado.";
			} else {
				document.getElementById('txtIdEstadoCivil').value = "Estado Civil: Viudo.";
			}
		}
	}
	document.getElementById('txtIdSueldo').value = "Suledo Bruto: $" + sueldoBruto + ".";

	document.getElementById('txtIdLegajo').value = "N° de Legajo: " + legajo + ".";

	if (nacionalidad == 'a' || nacionalidad == 'A') {
		document.getElementById('txtIdNacionalidad').value = "Nacionalidad: Argentina.";
	} else {
		if (nacionalidad == 'e' || nacionalidad == 'E') {
			document.getElementById('txtIdNacionalidad').value = "Nacionalidad: Extranjera.";
		} else {
			document.getElementById('txtIdNacionalidad').value = "Nacionalidad: Nacionalizada.";
		}
	}
}