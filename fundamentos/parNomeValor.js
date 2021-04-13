const saudacao = ' opa ' // contexto léxico 1

function  exec( ) {
    const saudacao = 'Falaaa'// contexto léxico 2
    return saudacao     //return faz voltar a leitura do codigo 
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome:'Pedro',
    idade: 32,
    peso:90,
    endereco: {
        logradouro: 'rua muito legal',
        numero : 123        
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.endereco)