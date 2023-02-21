function mostrar() {
    let planeta;

    planeta = prompt("Ingrese un planeta del sistema solar (todo en minusculas):");

    switch (planeta) {
        case "tierra":
            alert("Acá vivimos!!");
            break;
        case "mercurio":
        case "venus":
            alert("Acá hace mas calor!!");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("Acá hace mas frio!!");
            break;
        default:
            alert("El planeta ingresado no es valido!!");
            break;
    }
}
