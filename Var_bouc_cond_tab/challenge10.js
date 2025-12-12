const p = require("prompt-sync")()

let array = []
let croissance = ""

for(i = 1; i <= 5; i++){
    let nb = Number(p("Donner un nombre : "))
    array.push(nb)
}

let progression = true
let regression = true

//boucle to compare an element by the element next to
for(let i = 0; i < array.length - 1; i++){
    if(array[i] < array[i+1]){// ila kan array[i] inf de array[i+1] => prog
        regression = false
    } else if(array[i] > array[i+1]){// ila kan array[i] sup de array[i+1] => regr
        progression = false
    } else {
        // égalité -> casse progression et regression
        progression = false
        regression = false
    }
}

if(progression){
    croissance = "Progression"
}else if(regression){
    croissance = "Régression"
}else{
    croissance = "Tendance irrégulière"
}

console.log(croissance)