//Você esta fazendo estágio na CEREL e foi solicitado um programa para calcular a média dos estudantes.
//Algumas regras de validacão devem ser realizadas:
//Verificar se é um número
//Verificar se a nota esta entre 0 e 10
//Criar uma função para calcular a media das notas.
//Criar uma função para validar a nota.
//Processar um vetor com 10 posições, sendo que cada posição representa a nota de um estudante. (Para preencher o vetor, deve ser utilizada uma função que valida a nota).
const readline = require('readline-sync');
let Matriz = [];
let Vnota = [];

function CalcMd() {
    let al = 0;
    // Calcula média
    for (let i = 0; i < 3; i++) {
        let est = readline.question("Qual o nome do estudante? ");
        let nota = parseInt(readline.question("Qual e a nota? "));

        // Valida nota
        while (!validaNota(nota)) {
            console.log("Nota inválida. Digite uma nota entre 0 e 10.");
            nota = parseInt(readline.question("Qual e a nota? "));
        }
        Matriz[i] = [];
        Matriz[i][0] = est;
        Matriz[i][1] = nota;
        Vnota[i] = nota;
        // Fim valida nota
    }

    for (let m = 0; m < Vnota.length; m++) {
        al = al + parseInt(Vnota[m]);
    }

    let res = al / Vnota.length;
    console.log("Lista de estudantes e suas respectivas notas:");
    console.table(Matriz);
    console.log("Média dos estudantes: ", res);
    // Fim calcula media
}

function validaNota(nota) {
    return nota >= 0 && nota <= 10;
}
CalcMd();