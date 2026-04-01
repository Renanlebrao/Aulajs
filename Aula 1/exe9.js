var principal = prompt("Digite o valor principal: ");

var taxa = prompt("Digite a taxa de juros (em %): ");

var tempo = prompt("Digite o tempo em anos: ");

var montante = Number(principal) * (1 + (Number(taxa) / 100) * Number(tempo));

document.write("O montante é: R$ " + montante.toFixed(2));