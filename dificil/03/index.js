var prompt = require('prompt-sync')();

const numero = Math.floor(Math.random() * 11)


console.log(`O programa gerou um número entre 0 e 10.
Adivinhe qual é esse número.`)

const resposta = +prompt('Qual é o seu palpite? ')
if(numero == resposta) {
    console.log('VOCÊ ACERTOU')
} else {
    console.log('VOCÊ ERROU')
}

console.log(`O número era ${numero}`)