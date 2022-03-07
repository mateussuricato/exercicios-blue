var prompt = require('prompt-sync')();

for (let i = 1; i <= 10; i++) {
    console.log(`Tabuada do ${i}`)
    for (let j = 1; j <= 10; j++){
        res = j * i
        console.log(`${i} x ${j} = ${res}`)
    }
    console.log(``)
}