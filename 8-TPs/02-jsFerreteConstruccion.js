/*2.
Esteban Juan Amén -Div F
TP N° 2;

Para el departamento de Construcción:

A. Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el 
ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

B. Mostrar la cantidad de alambre a comprar  si se ingresara el radio de un
terreno circular y se debe alambra con tres hilos de alambre.

C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
	let largo;
	let ancho;
	let hilosAlambre = 3;
	let totalAlambre;

	ancho = parseFloat(document.getElementById('txtIdAncho').value);
	largo = parseFloat(document.getElementById('txtIdLargo').value);

	totalAlambre = ((ancho + largo) * 2) * hilosAlambre;

	alert("La cantidad total de alambre a comprar es de: " + totalAlambre.toFixed(2) + "Mts.");
}

function Circulo() {
	let radio;
	let circunferencia;
	let hilosAlambre = 3;
	let totalAlambre;

	radio = parseFloat(document.getElementById('txtIdRadio').value);

	circunferencia = (2 * Math.PI) * radio;
	totalAlambre = circunferencia * hilosAlambre;

	alert("La cantidad total de alambre a comprar es de: " + totalAlambre.toFixed(2) + "Mts.");
}

function Materiales() {
	let largo;
	let ancho;
	let area;
	let bolsasCemento = 2;
	let bolsasCal = 3;
	let totalBolsasCemento;
	let totalBolsasCal;

	ancho = parseFloat(document.getElementById('txtIdAncho').value);
	largo = parseFloat(document.getElementById('txtIdLargo').value);
	area = largo * ancho;

	totalBolsasCemento = area * bolsasCemento;
	totalBolsasCal = area * bolsasCal;

	alert("Se necesitan: " + totalBolsasCemento + " bolsas de Cemento y " + totalBolsasCal + " bolsas de Cal");
}