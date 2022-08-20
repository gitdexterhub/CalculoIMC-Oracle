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

    var imc = x/(y * y);
    
    alert("tu IMC es " + Math.round(imc));

    if(imc <= 18.5){
        alert("Estas Bajo de peso");
    }

    if(imc >= 18.5 && imc <= 24.9){
        alert("Estas en un peso adecuado");
    }
    if(imc >= 25 && imc <= 29.9){
        alert("Estas en sobrepeso");
    }
    if(imc >= 30){
        alert("Tu IMC indica que estas en obesidad");
    }
}

function buscar()
{
    var x = (peso2.value);
    var y = (talla2.value);
    //Talla final para poder realizar el calculo 
    tF = y/100; 
    //Calculo de IMC
    imc = x/(tF * tF);
    alert("tu IMC es " + parseInt(imc));

    if(imc <= 18.5){
        alert("Estas Bajo de peso");
    }

    if(imc >= 18.5 && imc <= 24.9){
        alert("Estas en un peso adecuado");
    }
    if(imc >= 25 && imc <= 29.9){
        alert("Estas en sobrepeso");
    }
    if(imc >= 30){
        alert("Tu IMC indica que estas en obesidad");
    }
}



