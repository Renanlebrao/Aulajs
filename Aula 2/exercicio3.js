function calcular ()
{
let valor, taxa, tempo, resultado;

//entrada
valor = Number (document.getElementById ("valor"). value)
tempo = Number (document.getElementById ("tempo"). value)
taxa = Number (document.getElementById ("taxa"). value)

//processamento

resultado = valor + (valor * (taxa * taxa / 100 ) * tempo);


//saida

document.getElementById("resultado").innerHTML = "<p>O valor da parcela é " + resultado + "<p>";

}
