function calcular()
{
    numero = document.getElementById("numero").value;

    quadrado = Number(numero)*Number(numero);
    cubo = Number(numero) * Number(numero) * Number(numero);

    document.getElementById("resultado").innerHTML = 
    "<p>O quadrado do numero é " +  quadrado  + " e o cubo é " + cubo + "<p>" 


}