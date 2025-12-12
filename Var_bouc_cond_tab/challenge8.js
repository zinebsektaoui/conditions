const p = require("prompt-sync")()

let nb1 = Number(p("Donner un nombre :"))
let nb2 = Number(p("Donner un nombre :"))
let nb3 = Number(p("Donner un nombre :"))

const array = [nb1, nb2, nb3]

let reverse = []
for(let i = array.length-1; i>=0; i--){
    reverse.push(array[i])
}
console.log(array + "," + reverse)





// sans boucle inverser
// let array = []
// for(i=1; i<=3; i++){
//     let nbr = Number(p("Donner un nombre :"))
//     array.push(nbr)
// }
// console.log((array) + "," + (array.reverse()))