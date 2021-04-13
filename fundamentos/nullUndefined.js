            // undefined n foi declada
            // null n existe 

var valor // n inicializada
console.log(valor)

valor = null //ausencia de valor 
console.log(valor)
//console.log(valor.toString())

const  produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto.preco)

produto.preco = undefined// evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)