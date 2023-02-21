function mostrar() {
    let hora;
    let mañana;
    let tarde;
    let noche;

    hora = document.getElementById('laHora').value;

    switch (hora) {
        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
            mañana = "Es de mañana!!";
            alert(mañana);
            break;
        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
        case "17":
        case "18":
        case "19":
            tarde = "Es de tarde!!";
            alert(tarde);
            break;
        case "20":
        case "21":
        case "22":
        case "23":
        case "24":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
            noche = "Es de noche!!";
            if (hora > 19 && hora < 24) {
                noche += " A dormir!!"
                alert(noche);
            } else {
                alert(noche);
            }
            break;
        default:
            alert("La hora ingresada no es valida!!");
            break;
    }
}
