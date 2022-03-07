var prompt = require('prompt-sync')();

const anoNasc = +(prompt("Qual ano você nasceu? "))
const ano = new Date
const anoAtual = ano.getFullYear()
const idade = anoAtual - anoNasc 

console.log(`Você nasceu no ano: ${anoNasc}
O ano atual é: ${anoAtual}
Você tem: ${idade} anos
Você está na flor da idade`)