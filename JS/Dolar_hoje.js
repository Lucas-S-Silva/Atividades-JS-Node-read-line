/*5. Dado o preço de um produto em Reais, converta este valor para o equivalente em
Dólares. O programa deverá ler o preço e a taxa de conversão para o Dólar. */
const readline = require('readline-sync')
function Dol() {
    let Rs = parseInt(readline.question('Digite o valor em R$:'));
    let taxa = 4.90;
    console.log((Rs/taxa).toFixed(2))
}
Dol()