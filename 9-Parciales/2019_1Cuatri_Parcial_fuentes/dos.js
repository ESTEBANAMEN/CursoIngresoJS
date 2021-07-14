//Ejercicio 2 de parcial 2019


function mostrar()
{
  var persona1
  var pesop1
  var persona2
  var pesop2
  var suma
  var promedio
  var mensaje

  persona1=prompt("Indique su nombre");
  pesop1=prompt("¿Cuanto pesa usted?");
  pesop1=parseInt(pesop1);

  alert("Ahora, continuan los datos de la otra persona");

  persona2=prompt("Indique su nombre");
  pesop2=prompt("¿Cuanto pesa usted?");
  pesop2=parseInt(pesop2);

  suma=pesop1+pesop2;
  promedio=suma/2;

  mensaje=("Ustedes se llaman "+persona1+ " y/e "+persona2);
  mensaje=(mensaje+", pesan "+pesop1+ " y "+pesop2+" kilos respectivamente");
  mensaje=(mensaje+", que sumados dan "+suma+ " kilos");
  mensaje=(mensaje+ ", cuyo promedio es de "+promedio+" kilos.");

  alert(mensaje);
}
