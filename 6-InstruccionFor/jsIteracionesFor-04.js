/*
Esteban Juan Amén
	DIV - F
Ejercicio 4 - for;
*/
function mostrar() {
	for (; ;) {
		alert("ERROR FATAL!!\nEn breve se destruirá el planeta tierra!!\nLa unica manera de salvar la vida de todos los seres humanos, es utilizando el BREAK enviado desde los mismisimos cielos!");
		if (confirm("UTILIZAMOS EL ARAMA BREAK??") == true) {
			break;
		}
	}
	document.write(
		`<b style = "color:red">BIEN HECHO MUCHACHO!!</B>`
	);
}