var prompt = require('prompt-sync')();

const valor = 100.98
const pagou = 150.00

const total = pagou - valor

console.log(`O valor do item foi: R$${(valor).toFixed(2)}
O cliente deu: R$${(pagou).toFixed(2)}
O cliente recebeu de troco: R$${Math.round((total).toFixed(2))}`)
