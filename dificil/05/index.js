var prompt = require('prompt-sync')();

let continuar = 'S'

while (continuar == 'S') {

    console.log('JOKENPO')

const jokenpo = ['PEDRA', 'PAPEL', 'TESOURA']

let vitoriasJogador = 0

let vitoriasComputador = 0

let rodadas = +prompt('Quantas rodadas iremos jogas? ')
for (let i = 0; i < rodadas; i++) {
    console.log('\n[0] PEDRA\n[1] PAPEL\n[2] TESOURA\n')
    const escolhaJogador = + prompt('Qual a sua escolha? ')
    const escolhaComputador = Math.floor(Math.random() * 3)
    console.log(`Você escolheu ${jokenpo[escolhaJogador]}\nO computador escolheu ${jokenpo[escolhaComputador]}`)
    if(escolhaComputador == 0) {
        if (escolhaJogador == 0) {
            console.log('EMPATOU')
        } else if (escolhaJogador == 1) {
            console.log('VOCÊ VENCEU')
            vitoriasJogador++
        } else if (escolhaJogador == 2) {
            console.log('VOCÊ PERDEU')
            vitoriasComputador++
        } else {
            console.log('OPÇÂO INVÁLIDA')
        }
    } else if(escolhaComputador == 1) {
        if (escolhaJogador == 0) {
            console.log('VOCÊ PEDEU')
            vitoriasComputador++
        } else if (escolhaJogador == 1) {
            console.log('EMPATOU')
        } else if (escolhaJogador == 2) {
            console.log('VOCÊ GANHOU')
            vitoriasJogador++
        } else {
            console.log('OPÇÂO INVÁLIDA')
        }
    } else if(escolhaComputador == 2) {
        if (escolhaJogador == 0) {
            console.log('VOCÊ VENCEU')
            vitoriasJogador++
        } else if (escolhaJogador == 1) {
            console.log('VOCÊ PERDEU')
            vitoriasComputador++
        } else if (escolhaJogador == 2) {
            console.log('EMPATOU')
        } else {
            console.log('OPÇÂO INVÁLIDA')
        }
    }
}

console.log(`\nO Computador venceu ${vitoriasComputador} rodadas.`)
console.log(`\nVocê venceu ${vitoriasJogador} rodadas.`)

if (vitoriasComputador > vitoriasJogador) {
    console.log('\nO campeão dessa partidas foi o Computador')
} else if (vitoriasComputador < vitoriasJogador) {
    console.log('\nO campeão dessa partidas foi o Você')
} else {
    console.log('\nEssa partida Empatou, jogue novamente')
}

    continuar = prompt('Deseja continuar [s/n]? ').toUpperCase()
    while (continuar != 'S' && continuar != 'N') {
        continuar = prompt('Deseja continuar [s/n]? ').toUpperCase()
    }
}

console.log('Programa finalizado...')