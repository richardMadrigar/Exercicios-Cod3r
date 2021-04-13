let dobro = function (a) {
    return 2 * a
}


dobro = (a) => {
    return 2 * a
}


dobro = a => 2 * a // return implicido
console.log(dobro(Math.PI))


let ola = function () {
    return 'ola'
}


ola = () => 'ola'
ola = _ => 'ola' //possui um parametro
console.log(ola())