//Crie uma função que receba um array de números como parâmetro e retorne um novo array com todos os números multiplicados por 2.

let vet = [1,2,3,4,5,6,7,8,9,10];
function Mult2(vet) {
    let aux = 0
        for (let i = 0; i < vet.length; i++) {
            aux = (vet[i] * 2)
            vet[i] = aux 
        }
    console.log(vet);
}
Mult2(vet)