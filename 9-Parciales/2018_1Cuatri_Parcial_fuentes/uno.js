function mostrar() {
    let ancho;
    let largo;
    let perimetro;

    alert("A continuación solicitaremos el ancho y el largo (en centimetros) de un rectangulo para calcular su perimetro...")

    ancho = parseFloat(prompt("Ingrese el Ancho del rectangulo:"));
    largo = parseFloat(prompt("Ingrese el Largo del rectangulo:"));

    perimetro = (ancho + largo) * 2;

    alert("El perimetro del rectangulo es: " + perimetro + "cm.");
}