var prompt = require('prompt-sync')();

const nasc = +prompt('Digite o ano que você nasceu: ')
const date = new Date()
const ano = date.getFullYear()
const res = ano - nasc

if(res < 16) {
    console.log(`Você NÃO PRECISA VOTAR, você tem apenas ${res} anos`)
} else if (res >= 18 && res <= 70) {
    console.log(`Você tem ${res} anos, seu voto é OBRIGATÓRIO`)
} else {
    console.log(`Você tem ${res} anos, seu voto é OPCIONAL`)
}
