var funcs = []    //array criado

for (let i = 0 ; i < 10; i++){   //laço criado
    funcs.push(function(){   //funcs.push fez add let la em cima no const
        console.log(i)
        
    })
}

funcs[2]()
funcs[8]()