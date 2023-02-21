function mostrar() {
    let numeroUno;
    let numeroDos;
    let suma;

    numeroUno = prompt("Ingrese el primer numero:");
    numeroDos = prompt("Ingrese el segundo numero:");

    if (numeroUno == numeroDos) {
        alert(numeroUno + numeroDos);
    } else if (numeroUno > numeroDos) {
        alert(parseFloat(numeroUno) - parseFloat(numeroDos));
    } else {
        suma = parseFloat(numeroDos) + parseFloat(numeroUno)
        alert(suma);
    }

    if (suma > 10) {
        alert("La suma es " + suma + " y supero el 10");
    }
}
