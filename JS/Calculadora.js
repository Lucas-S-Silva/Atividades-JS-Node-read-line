//Menu -> Switch
//0 - Sair 1 - Somadois 2 - SubDois 3 - MultDois 4 - DivDois 5- RestoDois
const readline = require('readline-sync')
var a = 0;
var b = 0;
let opc = 9;
var res = 0;

while(opc != 0){

console.log("//////////////////CALCULADORA//////////////////////////");
console.log("------ Comandos -----")
console.log("utilize '0' Caso queira Sair")
console.log("utilize '1' Caso queira Somar dois numeros")
console.log("utilize '2' Caso queira Subtrair dois numeros")
console.log("utilize '3' Caso queira Multiplicar dois numeros")
console.log("utilize '4' Caso queira Dividir dois numeros")
console.log("utilize '5' Caso queira ver o resto de uma divisao")

opc = readline.question('Informe o comando que deseje usar: ')

if(opc != 0){
a = parseInt(readline.question('Informe o primeiro numero: '));
b = parseInt(readline.question('Informe o segundo numero: '));
}

/*Funções*/

function SomaDois(a,b) {
    return a + b;
  }
  
  function SubDois(a,b) {
    return a - b;
  }
  
  function MultDois(a,b) {
    return a * b;
  }
  
  function DivDois(a,b) {
    return a / b;
  }
  
  function restoDois(a,b) {
    return a % b;
  }

switch (opc) {
    case "0":
    console.log("Cabo");
        break;

    case "1":
        res = SomaDois(a,b);
        console.log("O resultado da da soma é: ",+ res);
        break;

        case "2":
            res = SubDois(a, b);
            console.log("O resultado da subtração é: ",+ res);
        break;

        case "3":
            res = MultDois(a, b);
            console.log("O resultado da multiplicaçao é: ",+ res);
        break;

        case "4":
            res = DivDois(a, b);
            console.log("O resultado da divisão é: ",+ res);
        break;

        case "5":
            res = restoDois(a, b);
            console.log("O resultado da sobra da divisão é: ",+ res);
        break;
    default:
}
}