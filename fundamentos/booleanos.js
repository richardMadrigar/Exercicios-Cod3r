  let isAtivo  = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
console.log(typeof isAtivo)

isAtivo = 1
console.log(!!isAtivo) //usando !! tranforma em booleanos, um simbolo de <!> troca o sentido de booleanos

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'texto')
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos..')
console.log(!!0)
console.log(!!'') //sem espaço é falso
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

let nome = ''
console.log(nome || 'desconhecido')

let nome1 = 'Lucas'
console.log(nome1 || 'desconhecido')


