/*4.
ESTEBAN AMEN
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
  var lamparas
  var marca
  var valor
  var descuento
/*
  lamparas=document.getElementById('txtIdCantidad').value;
  lamparas=parseInt(lamparas);
  marca=document.getElementById('Marca').value;
  valor=lamparas*35;
  
  //Valor sin descuento.
  document.getElementById('txtIdprecioDescuento').value=valor;

  
  if(lamparas>5)
  {
    document.getElementById('txtIdprecioDescuento').value=valor-valor*50/100;
  }//A.

  else
  {
    if(lamparas==5&&marca=="ArgentinaLuz")
    {
        document.getElementById('txtIdprecioDescuento').value=valor-valor*40/100;
    }
    else
    {
        if(marca!=="ArgentinaLuz")
        {
            document.getElementById('txtIdprecioDescuento').value=valor-valor*30/100;
        }
    }
  }//B.
  if(lamparas==4)
  {
    if(marca=="ArgentinaLuz"||marca=="FelipeLamparas")
    {
        document.getElementById('txtIdprecioDescuento').value=valor-valor*25/100;
    }
    else
    {
        document.getElementById('txtIdprecioDescuento').value=valor-valor*20/100;
    }
  }//C.
  if(lamparas==3)
  {
    if(marca=="ArgentinaLuz")
    {
        document.getElementById('txtIdprecioDescuento').value=valor-valor*15/100;
    }
    else
    {
        if(marca=="FelipeLamparas")
        {
            document.getElementById('txtIdprecioDescuento').value=valor-valor*10/100;
        }
        else
        {
            document.getElementById('txtIdprecioDescuento').value=valor-valor*5/100;
        }
    }*/

    lamparas=document.getElementById('txtIdCantidad').value;
    lamparas=parseInt(lamparas);
    marca=document.getElementById('Marca').value;
    valor=lamparas*35;  

  
    if(lamparas>5)
    {
    descuento=50/100;
    }//A.//////////////////////////////////////////////////////

    else
    {
    if(lamparas==5&&marca=="ArgentinaLuz")
    {
        descuento=40/100;
    }
    else
    {
        if(marca!=="ArgentinaLuz")
        {
            descuento=30/100;
        }
    }
    }//B./////////////////////////////////////////////////////

    if(lamparas==4)
    {
        if(marca=="ArgentinaLuz"||marca=="FelipeLamparas")
        {
           descuento=25/100;
        }
        else
        {
            descuento=20/100;
        }
    }//C./////////////////////////////////////////////////////

    if(lamparas==3)
    {
        if(marca=="ArgentinaLuz")
        {
            descuento=15/100;
        }
        else
        {
            if(marca=="FelipeLamparas")
            {
                descuento=10/100;
            }
            else
            {
                descuento=5/100;
            }
        }
    }//D./////////////////////////////////////////////////////

  //Para la cantidad de 1 o 2 lamparas no se aplica descuento.
  if(lamparas<3)
  {
    descuento=0
  }
    document.getElementById('txtIdprecioDescuento').value=valor-valor*descuento;

    if((valor-valor*descuento)>120)
    {
        document.getElementById('txtIdprecioDescuento').value=(valor-valor*descuento)+(valor-valor*descuento)*10/100;
        alert("IIBB Usted pago"+ ((valor-valor*descuento)*10/100)+" de impuestos, porque asi lo dicta el Profesor, Sr. Octavio VILLEGAS");
    }//E.////////////////////////////////////////////////////
}