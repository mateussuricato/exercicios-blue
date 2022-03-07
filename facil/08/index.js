var prompt = require('prompt-sync')();
/*
let valor = (prompt('Digite um valor: '))
let dolar = 0.20
let euro = 0.17
let libra = 0.15
let dolarCan = 0.25
let pesoArg = 20.96
let pesoChi = 159.39

console.log(`O valor convertido em Dolar: $${(valor * dolar).toFixed(2)}
O valor convertido em Euro: €${(valor * euro).toFixed(2)}
O valor convertido em Libra: £${(valor * libra).toFixed(2)}
O valor convertido em Dolar Canadense: C$${(valor * dolarCan).toFixed(2)}
O valor convertido em Peso Argentino: $${(valor * pesoArg).toFixed(2)}
O valor convertido em Peso Chileno: $${(valor * pesoChi).toFixed(2)}`)
*/

let moeda = ['Dolar', 'Euro', 'Libra Esterlina', 'Dolar Canadense', 'Peso Argentino', 'Peso Chileno']

let cambio = [0.19, 0.17, 0.14, 0.25, 20.82, 155.45]

console.log(`0 - ${moeda[0]}
1 - ${moeda[1]}
2 - ${moeda[2]}
3 - ${moeda[3]}
4 - ${moeda[4]}
5 - ${moeda[5]}`)

let numEscolhido = parseInt(prompt('Digite o número da moeda escolhida: '))
while(numEscolhido > 5) {
    console.log(`Escolha uma moeda válida`)
    numEscolhido = parseInt(prompt('Digite o número da moeda escolhida: '))
} 

console.log(`Moeda escolhida: ${moeda[numEscolhido]}`)

let valor = parseInt(prompt('Digite um valor em Reais: '))

console.log(`O valor convertido em ${moeda[numEscolhido]} é de ${(valor * cambio[numEscolhido]).toFixed(2)} `)
