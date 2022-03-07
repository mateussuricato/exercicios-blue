var prompt = require('prompt-sync')();

const largura = +prompt('Digite a largura: ')
const comprimento = +prompt('Digite o comprimento: ')
const res = largura * comprimento

console.log(`A área do teereno é de ${res}m2`)