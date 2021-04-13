const schedule = require ( 'node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 21 * * 5', function () {
    console.log('esecutando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('cancelando tarefa 1!')
},2000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] //dias da semana(dia 1= segunda/ dia 0= domingo)
regra.hour = 21  //hora do dia
regra.second = 5  //segundo da hr do dia

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('executando tarefa 2!' , new Date().getSeconds())
})