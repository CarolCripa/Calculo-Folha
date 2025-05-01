let salariobruto = parseFloat (input ('Informe o salário bruto:'));

let inssFaixaInicio = 0;
let inssFaixaFim = 1_518.00;
let inssFaixaLiquota = 7.5;

let faixa1 = {
    inicio: 0,
    fim: 1_518.00,
    aliquota: 0.075
};

let faixa2 = {
    inicio: 1_518.00,
    fim: 2_793.88,
    aliquota: 0.09
};

let faixa3 = {
    inicio: 2_793.88,
    fim: 4_190.83,
    aliquota: 0.12
};

let faixa4 = {
    inicio: 4_190.83,
    fim: 8_157.81,
    aliquota: 0.14
};

let tabelaINSS = {faixa1, faixa2, faixa3, faixa4};

console.table(tabelaINSS);

let faixaEncontrada = {};
for (let 1 = 0; i < tabelaINSS.length; i++) {
    const faixa = tabelaINSS [i];
    if (salarioBruto >= faixa.inicio &&
        salarioBruto <= faixa.fim) {
            faixaEncontrada = faixa;
            break;
        }
}