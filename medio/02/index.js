var prompt = require('prompt-sync')();

let num = parseInt(prompt('Digite um número: '))
while(num == 0){
    console.log('Digite um Numero diferente de Zero!')
    num = parseInt(prompt('Digite um número: '))
}

console.log(`O número digitado é ${num}`)
if(num > 0) {
    console.log('O número é positivo')
} else {
    console.log('O número é negativo')
}