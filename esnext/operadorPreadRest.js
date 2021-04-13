const funcionario  = {nome: 'maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//usar spred com array
const grupoA = ['joao', 'pedro']
const grupoFinal = ['maria', ...grupoA, 'rafaela']
console.log(grupoFinal)
