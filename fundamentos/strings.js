const escola = "Cod3r"  // a contagem comeca no zero Richard ( r=0, i=1, c=2, h=3, a=4, r=5, d=6)
             
console.log (escola.charAt(4))  // imprime o valor q esta no .charAt(4)
console.log(escola.charCodeAt(3)) // imprime valor da tabela
console.log(escola.indexOf('r')) //descobre onde esta o caracter /  a contagem comeca no zero

console.log(escola.substring(1)) // contagem apartir do indice 1 ( vai pular o primeiro indice (0))
console.log(escola.substring(0, 3)) //aqui vc limita do incicio ate o ultimo caracter q escolher (1 , 5)

console.log('escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log(' Ana,Maria,Pedro'.split(',')) // transforma em array(vetor)
