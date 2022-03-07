var prompt = require('prompt-sync')();

let saque = +prompt('Escolha o valor do saque, entre R$10 e R$600: ')
const notas = [100, 50, 10, 5, 1]
const quantidade = []

console.log(notas.length)

for (let i = 0; i < notas.length; i++) {
    quantidade[i] = Math.floor(saque / notas[i])
    saque = saque - quantidade[i] * notas[i]
    if(quantidade[i] != 0) {
        console.log(`${quantidade[i]} notas de  ${notas[i]}`)
    }
}
