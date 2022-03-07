var prompt = require('prompt-sync')();

let num =  parseInt(prompt('Digite um número '))
if(num % 2 == 0){
    console.log(`${num} é par`)
} else {
    console.log(`${num} é ímpar`)
}