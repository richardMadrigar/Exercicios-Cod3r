//nao aceita repetiçao


const times = new Set ()
    times.add('Vasco')
    times.add('sao paulo').add('palmeiras').add('corinthias')
    times.add('flamengo')
    times.add('Vasco')

console.log(times)
console.log(times.size)  //quantidade 
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes
