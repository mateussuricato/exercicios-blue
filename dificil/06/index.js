var prompt = require('prompt-sync')();

const rodadas = +prompt('Quantas rodadas serão jogadas? ')
const jogadores = +prompt('Quantos jogadores irão jogar? ')
const jogadoress = []

for (let i = 0; i < jogadores; i++) {
    jogadoress.push({
        jogador: i+1,
        vitorias: 0,
    })
}

for (let i = 0; i < rodadas; i++) {
    console.log(`\nRodada ${i+1}`)

    const rodada = []

    for (let i = 0; i < jogadores; i++){
        const resultadoDado = Math.floor(Math.random() * 6 + 1)
        rodada.push({
            jogador: i+1,
            numero: resultadoDado,
        })
    }

    function numMaior (a, b) {
        if(a.numero < b.numero) return 1
        if(a.numero > b.numero) return -1
        return 0
    }

    rodada.sort(numMaior)
    console.log(rodada)
    console.log(`O vencedor da rodada ${i+1} foi o jogador ${rodada[0].jogador}`)

    const posicao = jogadoress.findIndex((tabela => tabela.jogador == rodada[0].jogador))

    jogadoress[posicao].vitorias++
}

function maisVitorias(a, b) {
    if (a.vitorias < b.vitorias) return 1
    if (a.vitorias > b.vitorias) return - 1
    return 0
}

jogadoress.sort(maisVitorias)


console.log(`\nO jogador ${jogadoress[0].jogador} venceu ${jogadoress[0].vitorias} rodadas e foi o grande campeão!`)