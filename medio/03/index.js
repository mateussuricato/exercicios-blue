var prompt = require('prompt-sync')();

var prompt = require('prompt-sync')();

let num = parseInt(prompt('Digite um número: '))
let num2 = parseInt(prompt('Digite outro número: '))
console.log(`Você digitou primeiro ${num} e depois ${num2}`)
if(num > num2) {
    console.log(`O numero maior é ${num}`)
} else if(num2 > num) {
    console.log(`O número maior é ${num2}`)
} else if(num2 == num){
    console.log('Os números são iguais')
}
