var peso = prompt("Digite o peso em kg: ");

var altura = prompt("Digite a altura em metros: ");

var imc = Number(peso) / (Number(altura) * Number(altura));

document.write("O IMC é: " + imc.toFixed(2));