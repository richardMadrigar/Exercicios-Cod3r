for (let letra of "richard") {
    console.log(letra)
}

const assuntoEcma = ['map, set, primise']

for (let i in assuntoEcma) {
    console.log(i)
}

for (let assunto of assuntoEcma) {
    console.log(assunto)
}

const assuntoMap = new Map([
    ['map', { abordado: true }],
    ['set', { abordado: true }],
    ['primise', { abordado: false }]
])

for (let assunto of assuntoMap) {
    console.log(assunto)
}

for (let chave of assuntoMap.keys()) {
    console.log(chave)
}