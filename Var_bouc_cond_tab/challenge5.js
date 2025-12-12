const p = require("prompt-sync")()

let array = []
for (let i=1; i<=5; i++){
    let element = p("Donner un elemenet de votre choix (nombre ou mot) : ")
    array.push(element.toLowerCase())
}

if(array[0] === array[4] && array[1] === array[3]){
    console.log("Symétrique")
}else{
    console.log("Non symétrique")
}
console.log(array)
