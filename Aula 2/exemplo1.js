function calcular()
{
    let nome,idade,dias; 
    nome= document.getElementById("aluno").value;
    idade= Number (document.getElementById("idade").value)
    dias = idade *365
    document.getElementById("resultado").innerHTML = 
    "<p> O aluno " + nome + " Já viveu " + dias + " dias.";
}