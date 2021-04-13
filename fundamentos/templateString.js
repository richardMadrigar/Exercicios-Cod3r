const nome = 'Rebeca'   //variavel que recebeu o nome Rebeca
const concatenacao = ' Olá ' + nome + '!'      //concatenou olá com + a variavel (nome)
const templete =`    
    Olá
    ${nome}!`    //trouxe a variavel nome aqui nesta linha usando $(nome) e add "!"
console.log(concatenacao, templete, ) 

//espressoes..
console.log(`1 + 1 = ${1+1}`)  //oq está entre chaves q ele faz o calculo/ oq estiver como string ele aparece pro usuario



const up = texto => texto.toUpperCase()

console.log(`Ei...  ${up("cuidado")} !`)