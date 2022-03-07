var prompt = require('prompt-sync')();

let valor = 42.54
const taxa = 1/10


console.log(`Valor da refeição: R$${valor}`)
console.log(`A taxa de serviço: R$${(valor * taxa).toFixed(2)}`)
console.log(`O valor total gasto no restaurante: R$${(valor * taxa + valor).toFixed(2)} `)