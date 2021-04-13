let numero = 1
{
    let numero = 2
    console.log('dentro =', numero) //quando vc pede para imprimir na tela o Let da prioridade para o Let q esta dentro do escoplo principal, caso não tenha ela pega p let de fora
} 
console.log('fora =', numero) //aqui ele vai pegar o let de fora pq o console.log() esta fora.