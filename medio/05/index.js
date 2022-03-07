var prompt = require('prompt-sync')();

let aumento = [280, 700, 1500]
const salario = parseInt(prompt('Digite o valor do sálario: '))
let aumentoRes = 0

if(salario <= aumento[0]) {
    aumentoRes = 0.2
} else if (salario > aumento[0] && salario < aumento[1]) {
    aumentoRes = 0.15
} else if (salario > aumento[1] && salario < aumento[2]) {
    aumentoRes = 0.10
} else if (salario > aumento[2]) {
    aumentoRes = 0.05
} 

console.log(`O salário antes do reajuste era R$${(salario.toFixed(2))}`)
console.log(`Foi aplicado um aumento de ${aumentoRes * 100}%`)
console.log(`O valor do aumento é R$${(salario * aumentoRes).toFixed(2)}`)
console.log(`O novo sálario é de R$${(salario * aumentoRes + salario).toFixed(2)}`)