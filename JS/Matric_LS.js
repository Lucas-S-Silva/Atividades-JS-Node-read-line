/*Você esta fazendo estágio na CEREL do IFMS-cx e foi solicitado o desenvolvimento um programa de gerenciamento de alunos para o IF. O programa deve permitir o cadastro de alunos,
exibição de informações dos alunos cadastrados e a busca de um aluno específico por meio do número de matrícula.

Você precisa implementar as seguintes funcionalidades:

Cadastrar aluno: O programa deve permitir o cadastro de um novo aluno, solicitando as seguintes informações: número de matrícula, nome completo e idade. Os dados devem ser validados
para garantir que não sejam inseridos campos vazios ou inválidos.
Exibir lista de alunos: O programa deve exibir a lista de todos os alunos cadastrados, mostrando o número de matrícula, nome e idade de cada um.
Buscar aluno por matrícula: O programa deve permitir a busca de um aluno específico por meio do número de matrícula. Caso o aluno seja encontrado, suas informações
(número de matrícula, nome e idade) devem ser exibidas. Caso contrário, deve-se exibir uma mensagem informando que o aluno não foi encontrado.
Você deve implementar as seguintes funções:

cadastrarAluno(matricula, nome, idade): Função responsável por cadastrar um novo aluno. Ela deve receber como parâmetros o número de matrícula, o nome completo e a idade do aluno.
Certifique-se de validar os dados antes de cadastrá-los na matriz de alunos.
exibirAlunos(): Função responsável por exibir a lista de alunos cadastrados, mostrando o número de matrícula, nome e idade de cada um.
buscarAlunoPorMatricula(matricula): Função responsável por buscar um aluno específico pelo número de matrícula. Ela deve receber como parâmetro o número de matrícula a ser pesquisado
e retornar as informações do aluno, caso encontrado. Caso contrário, deve retornar uma mensagem informando que o aluno não foi encontrado.
Instruções:

Crie uma matriz vazia chamada alunos para armazenar os dados dos alunos cadastrados.
Implemente a função cadastrarAluno(matricula, nome, idade). Ela deve validar os dados recebidos e cadastrar o aluno na matriz alunos. Certifique-se de que o número de matrícula seja
único para cada aluno.
Implemente a função exibirAlunos(). Ela deve percorrer a matriz alunos e exibir as informações dos alunos cadastrados.
Implemente a função buscarAlunoPorMatricula(matricula). Ela deve percorrer a matriz alunos, buscar o aluno com o número de matrícula fornecido e retornar suas informações,
caso encontrado. Caso contrário, deve retornar uma mensagem informando que o aluno não foi encontrado.*/
const readline = require('readline-sync');
let Matrs = [["Registro de matriculas"]];
let Fim = 1;
let Aluns = [["Aluno","Idade","Matricula"]];
let chave = 0;
function cadastrarAluno(Matrs) {
    let Matric = 0;
    let Aluno = 0;
    let Idade = 0;
   Aluno = readline.question("Digite o nome completo do aluno: ");
   Idade = parseInt(readline.question("Digite a idade do aluno: "));
   Matric = parseInt(readline.question("Digite a matricula do aluno: "));
    if (typeof Aluno == "string" && Number.isInteger(Idade) && Number.isInteger(Matric)) {
        Aluns.push([Aluno, Idade, Matric]);
        Matrs.push(Matric);
        console.log("Operação realizada com sucesso");
    } else {
        console.log("Sua tentativa de registro falhou, repita o processo");
    }
}

function exibirAlunos(Aluns) {
    console.log("Alunos:")
    console.table(Aluns);
}

function buscarAlunoPorMatricula(Matrs, Aluns) {
    let Matric = parseInt(readline.question("Informe a matricula do aluno:"));
   for (let i = 1; i <= Matrs.length; i++) {
    if (Matrs[i] == Matric) {
        console.log("'Aluno', 'Idade', 'Matricula'");
        console.log(Aluns[i]);
        return;
    }
   }
   console.log("A matricula é inexistente");
}
while (Fim != 0) {
    
    console.log("///////////////////////IFMS CEREL//////////////////////////");
    
    console.log("------ Comandos -----")
    console.log("utilize '0' Caso queira Sair")
    console.log("utilize '1' Caso queira cadastrar algum aluno")
    console.log("utilize '2' Caso queira buscar algum aluno")
    console.log("utilize '3' Caso queira exibir os alunos")

    chave = parseInt(readline.question("Digite o comando que deseje executar: "));
    switch (chave) {
        case 0:
           Fim = 0;
           console.log("End");
            break;

        case 1:
            cadastrarAluno(Matrs);
            break;

        case 2:
            buscarAlunoPorMatricula(Matrs, Aluns);
            break;

        case 3:
            exibirAlunos(Aluns);
            break;
   
        default:
            console.log("Error")
            break;
    }
}