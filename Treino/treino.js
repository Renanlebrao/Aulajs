// Função para calcular a área de um triângulo dado base e altura
function calcularArea(base, altura) {
    return (base * altura) / 2;
}

// Função para calcular a altura de um triângulo dado base e área
function calcularAltura(base, area) {
    return (2 * area) / base;
}

// Exemplo de uso
const base = 10; // Exemplo de base
const altura = 5; // Exemplo de altura
const area = calcularArea(base, altura);
console.log(`Área: ${area}`);

// Ou, se quiser calcular altura a partir de base e área
const areaConhecida = 25; // Exemplo de área conhecida
const alturaCalculada = calcularAltura(base, areaConhecida);
console.log(`Altura: ${alturaCalculada}`);