/*
                Esteban Juan Amén
                    Div - F
TP: Ferrete Iluminacion - SOLO if - else if - else;
*/
function CalcularPrecio() {
    let precio = 35;
    let cantidad;
    let marca;
    let descuento;
    let descuentoTotal;
    let aumento = 0.1;
    let aumentoTotal;
    let precioParcial;
    let precioConDescuento;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    //**********"else if"**********//

    // if (cantidad > 5) {
    //     descuento = .5;
    // } else if (cantidad == 5 && marca == "ArgentinaLuz") {
    //     descuento = .4;
    // } else if (cantidad == 5 && marca != "ArgentinaLuz") {
    //     descuento = .3;
    // } else if (cantidad == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")) {
    //     descuento = .25;
    // } else if (cantidad == 4 && (!(marca == "ArgentinaLuz" || marca == "FelipeLamparas"))) {
    //     descuento =.2;
    // } else if (cantidad == 3 && marca == "ArgentinaLuz") {
    //     descuento =.15;
    // } else if (cantidad == 3 && marca == "FelipeLamparas") {
    //     descuento =.1;
    // } else if (cantidad == 3 && (!(marca == "FelipeLamparas" || marca == "ArgentinaLuz"))) {
    //     descuento =.05;
    // } else {
    //     descuento = 0;
    // }

    //**********"if-else"**********//

    // if (cantidad > 5) { 
    //     descuento = .5;
    // } else {
    //     if (cantidad == 5) {
    //         if (marca == "ArgentinaLuz") {
    //             descuento = .4;
    //         } else {
    //             descuento = .3;
    //         }
    //     } else {
    //         if (cantidad == 4) {
    //             if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
    //                 descuento = .25;
    //             } else {
    //                 descuento = .2;
    //             }
    //         } else {
    //             if (cantidad == 3) {
    //                 if (marca == "ArgentinaLuz") {
    //                     descuento = .15;
    //                 } else {
    //                     if (marca == "FelipeLamparas") {
    //                         descuento = .1;
    //                     } else {
    //                         descuento = .05;
    //                     }
    //                 }
    //             } else {
    //                 descuento = 0;
    //             }
    //         }
    //     }
    // }

    //**********"switch con if-else"**********//

    // switch (cantidad) {
    //     case 5:
    //         if (marca == "ArgentinaLuz") {
    //             descuento = .4;
    //         } else {
    //             descuento = .3;
    //         }
    //         break;
    //     case 4:
    //         if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
    //             descuento = .25;
    //         } else {
    //             descuento = .2;
    //         }
    //         break;
    //     case 3:
    //         if (marca == "ArgentinaLuz") {
    //             descuento = .15;
    //         } else {
    //             if (marca == "FelipeLamparas") {
    //                 descuento = .1;
    //             } else {
    //                 descuento = .05;
    //             }
    //         }
    //         break;
    //     case 2:
    //     case 1:
    //         descuento = 0;
    //         break;
    //     default:
    //         descuento = .5;
    //         break;
    // }


    //**********"switch con switch anidado"**********//

    if (!(cantidad < 1)) {
        switch (cantidad) {
            case 1:
            case 2:
                descuento = 0;
                break;
            case 3:
                switch (marca) {
                    case "ArgentinaLuz":
                        descuento = .15;
                        break;
                    case "FelipeLamparas":
                        descuento = .1;
                        break;
                    default:
                        descuento = .05;
                        break;
                }
                break;
            case 4:
                switch (marca) {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = .25;
                        break;
                    default:
                        descuento = .2;
                        break;
                }
                break;
            case 5:
                switch (marca) {
                    case "ArgentinaLuz":
                        descuento = .4;
                        break;
                    default:
                        descuento = .3;
                        break;
                }
                break;
            default:
                descuento = .5;
                break;
        }

        precioParcial = cantidad * precio;
        descuentoTotal = precioParcial * descuento;
        precioConDescuento = precioParcial - descuentoTotal;
        aumentoTotal = precioConDescuento * aumento;

        if (precioConDescuento > 120) {
            precioConDescuento = precioConDescuento + aumentoTotal;
            document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
            alert("IIBB: Usted pagó $" + aumentoTotal.toFixed(2));
        } else {
            document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
        }
    } else {
        alert("Ingrese un numero correcto de cantidad de focos!!");
        document.getElementById('txtIdprecioDescuento').value = "ERROR!!"
    }
}