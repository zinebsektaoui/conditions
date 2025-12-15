const p = require("prompt-sync")()

function remplirTableau(length) {
    let array = []
    for(let i=1; i<=length; i++){
        let nb = Number(p("Donner un nombre : "))
        array.push(nb)
    }
    console.log(array) 
}
remplirTableau(5)