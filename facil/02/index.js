var prompt = require('prompt-sync')();

const nome = prompt("Nome Completo: ")
const endereco = prompt("Endereço: ")
const cep = prompt("CEP: ")
const tel = prompt("Telefone: ")

console.log(` Nome: ${nome} \n Endereço: ${endereco} \n CEP: ${cep}  Telefone: ${tel}`)