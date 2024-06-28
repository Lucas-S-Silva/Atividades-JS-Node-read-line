//Crie uma função que receba um array de números como parâmetro e retorne o maior número desse array.
let vet = [4,6,8,2,0,12,6,54,75,1,11];
function Maior(vet) {
    let n = vet.length;
for (let ex = 0; ex < n - 1; ex++)
    for (let i = 0; i < n - ex - 1; i++)
        if (vet[i] > vet[i + 1]) {
            let temp = vet[i];
            vet[i] = vet[i + 1];
            vet[i + 1] = temp;
        }
        n = n-1
console.log(vet[n]);
}
Maior(vet)