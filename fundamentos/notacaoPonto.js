console.log(Math.ceil(6.1))

///////////////////////////////////////////////////////////////////////////////////

const obj1 = {}
obj1.nome = 'Bola' //criando objeto dinamico  o '.' é usado para ligar o objeto q ja esta criado e add o nome
console.log(obj1.nome) 

////////////////////////////////////////////////////////////////////////////////////

function obj (nome) {
    this.nome = nome
    this.exec = function( ) {
        console.log('exec...')
    }
}

const obj2 = new obj( ' Cadeira ')
const obj3 = new obj(' Mesa ')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()   //esse exec esta subindo para a linha 13 e saindo no console 
