/*
Esteban Juan Amén
	Div - F
Ejercicio 10 - IF;
*/
// function mostrar() {
// 	let notaRandom;

// 	notaRandom = Math.trunc(Math.random() * 10 + 1);

// 	if (notaRandom > 8) {
// 		alert(notaRandom + ": CELENTE!!");
// 	} else if (notaRandom > 3) {
// 		alert(notaRandom + ": APROBÓ!!");
// 	} else {
// 		alert(notaRandom + ": Vamos, la proxima se puede!!")
// 	}
// }


// 	Esteban Juan Amén
// 		Div - F
// Ejercicio Integrado 4 - IF;

// Tenemos que crear un programa que verifique si el usuario puede subirse
// a una montaña rusa, para esto el usuario deberá ingresar los siguientes
// datos por prompt: Altura y edad. 
// Si el usuario mide menos de 120 cm debemos indicar que no puede subirse
// a la montaña rusa, en cambio sí tiene la altura correspondiente debemos
// preguntar su edad y mostrarle al usuario por alert el monto a pagar.
// El monto a pagar:
// 200$: para menores de edad y mayores de 80
// 400$: Mayores de edad menores a 80

// A tener en cuenta: Si preguntamos la altura del usuario y no puede subir
// no deberíamos preguntarle la edad.

function mostrar() {
	let altura;
	let edad;

	altura = parseFloat(prompt("Ingrese su altura en centimetros (Ej: para 1 metro 50 ingrese 150):"));

// 	if (altura > 119) {
// 		edad = parseInt(prompt("Ingrese su edad"));
// 		if ((edad > 3 && edad < 18) || (edad > 79 && edad < 100)) {
// 			alert("Usted puede Ingresar y su voleto tiene el valor de $200.");
// 		} else {
// 			if (edad > 17 && edad < 80) {
// 				alert("Usted puede Ingresar y su voleto tiene el valor de $400.");
// 			} else {
// 				alert("Usted ingreso una edad incorrecta!!");
// 			}
// 		}
// 	} else {
// 		alert("Uste no cumple con los requisitos minimos para ingresar.");
// 	}
// }

	if (altura > 119) {
		edad =parseInt(prompt("Ingrese su edad:"));
		if (edad > 17 && edad < 80) {
			alert("Puede ingresar por $400!!");
		} else {
			if (edad < 3 || edad > 100) {
				alert("Ingrese una edad correcta!")
			} else {
				alert("Usted puede ingresar por $200.");
			}
		}
	} else {
		alert("Uste no cumple con los requisitos minimos para ingresar.");
	}
}