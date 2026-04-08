function calcular ()
{
    let bt, at, area; 



    bt = Number (document.getElementById("bt").value);
    at = Number (document.getElementById("at").value);

    area= bt*at;        

document.getElementById ("resultado").innerHTML = "<p> O valor da area do Triangulo é " + area + "</p>"

}

