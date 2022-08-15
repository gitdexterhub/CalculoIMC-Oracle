var talla = document.getElementById("talla");
var talla2 = document.getElementById("talla2");
var peso2 = document.getElementById("peso2");
var peso = document.getElementById("peso");
var boton = document.getElementById("btn");
var boton2 = document.getElementById("nvb");
boton2.addEventListener("click", buscar);
boton.addEventListener("click", hallar);

function hallar()
{
    var x = (peso.value);
    var y = (talla.value);
    
    alert("tu IMC es " + parseInt(x/(y * y)));
}

function buscar()
{
    var x = (peso2.value);
    var y = (talla2.value);
    //Talla final para poder realizar el calculo 
    tF = y/100; 
    imc = x/(tF * tF);

    alert("tu IMC es " + parseInt(imc));
}

