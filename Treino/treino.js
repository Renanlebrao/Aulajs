function calcularSalarioLiquido(salarioBruto, gastosMensais) {
    const aliquotaIR = 0.15; // 15% de imposto de renda
    const aliquotaINSS = 0.08; // 8% de INSS
    
    const impostos = salarioBruto * (aliquotaIR + aliquotaINSS);
    const salarioLiquido = salarioBruto - impostos - gastosMensais;
    
    console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
    console.log(`Impostos (IR + INSS): R$ ${impostos.toFixed(2)}`);
    console.log(`Gastos Mensais: R$ ${gastosMensais.toFixed(2)}`);
    console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
    
    return {
        salarioBruto,
        impostos,
        gastosMensais,
        salarioLiquido
    };
}

// Exemplo de uso
calcularSalarioLiquido(3000, 1200);