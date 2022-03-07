let prompt = require('prompt-sync')();

const opcao1 = 'Esfirra fechada'
const opcao2 = 'Coxinha'
const opcao3 = 'Empadada'

console.log(`Os salgados que temos hoje são: \n1 - ${opcao1} \n2 - ${opcao2} \n3 - ${opcao3}`)

let escolhaNum = parseInt(prompt(`Escolha o número correspondente ao salgado: `))

if(escolhaNum == 1) {
    console.log(`\nVocê escolheu ${opcao1}`)
} else if(escolhaNum == 2){
    console.log(`\nVocê escolheu ${opcao2}`)
} else if(escolhaNum == 3){
    console.log(`\nVocê escolheu ${opcao3}`)
}

let repitir = prompt(`Você quer mais um salgado? Digite sim ou não: `)


if(repitir == 'sim') {
    console.log(`Escolha outro salgado: \n1 - ${opcao1} \n2 - ${opcao2} \n3 - ${opcao3}`)} else {
        console.log(`Pedido Finalizado`)
    }

let repitaNum = parseInt(prompt(`Escolha o número correspondente ao salgado: `))

if(repitaNum == 1) {
    console.log(`\nVocê escolheu ${opcao1}`)
} else if(repitaNum == 2){
    console.log(`\nVocê escolheu ${opcao2}`)
} else if(repitaNum == 3){
    console.log(`\nVocê escolheu ${opcao3}`)
}
