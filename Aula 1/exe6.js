var quant = prompt("Digite a quantidade de produtos: ");

var preco = prompt("Digite o preço unitário do produto: ");

var subtotal = Number(quant) * Number(preco);

var desconto = Number(subtotal) * 0.1;

var valorFinal = subtotal - desconto;

document.write("Subtotal: R$ " + subtotal.toFixed(2) + "<br>");
document.write("Desconto: R$ " + desconto.toFixed(2) + "<br>");
document.write("Valor final a pagar: R$ " + valorFinal.toFixed(2));