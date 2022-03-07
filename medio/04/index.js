var prompt = require('prompt-sync')();

let nota = parseInt(prompt('Digite sua nota: '))
let res = 'nada'

while(nota > 10) {
    nota = parseInt(prompt('Digite uma nota até o número 10: '))
}
if(nota < 6) {
    res = 'F'
} else if(nota >= 6 && nota < 7){
    res = 'D'
} else if(nota >= 7 && nota < 8){
    res = 'C'
} else if(nota >= 8 && nota < 9){
    res = 'B'
} else {
    res = 'A'
} 

console.log(`A nota do aluno é ${res}`)