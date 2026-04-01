var prestacao = Number(prompt("Digite o valor da prestação:"));
var taxa = Number(prompt(" Digite o valor da taxa:"));
var tempo = Number(prompt(" Digite o tempo de atraso em dias:"));

var valorparcela = prestacao + ( prestacao * ( taxa * taxa /100) * tempo);
document.write("<p> O valor da Parcela é: " + valorparcela + "</p>");