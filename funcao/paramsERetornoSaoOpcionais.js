function area(largura, altura){
    const area = largura * altura 
    if(area > 20) {
        console.log(`valor acima do perimitido: ${area}m2.`)      
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area(4, 10))