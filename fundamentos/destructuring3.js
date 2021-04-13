/// fazer sorteio

function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) +  min
    return Math.floor(valor)
}

const objs = { max: 50, min:40}
console.log(rand (objs))
console.log(rand({ min : 955}))