var prompt = require('prompt-sync')();

let lista = []
console.log('Digite 10 números')

for (let i = 0; i < 10; i++) {
let num = +prompt('Digite um números: ')
if (!lista.includes(num)) {
    lista.push(num)
} 
}

function crescente(a, b) {
    return a - b
}

lista.sort()

console.log(lista)