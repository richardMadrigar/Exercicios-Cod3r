function esperarPor(tempo = 2000) {
    return new  Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

/* esperarPor(2000)
    .then(() => console.log('executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('executando promise 3...'))
    
     */


    function retornarValor(){
        return new Promise (resolve => {
            setTimeout(() => resolve(10), 5000)
        })
    }


async function executar() {
    let valor =  await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(2000)
    console.log(`sync/Await ${valor + 1}...`)
}

executar()



