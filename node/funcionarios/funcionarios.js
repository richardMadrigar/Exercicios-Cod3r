const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'   //dados dos funcionarios
const axios = require('axios')          // axios dependencia

    //criação de variaves para poder filtar depois 
const chineses = f => f.pais === 'China'       
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual    // menor salario <
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    // os tres tipos de filtro que o prof pediu para filtrar
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)     //func vem da (const func)
})