const p = require("prompt-sync")()
let lodash = require("lodash")

let array = []
for(let i=1; i<=5; i++){
    let price = Number(p("Donner un prix : "))
    array.push(price)
}
let somme = lodash.sum(array)
let avg = somme / 5
array.forEach(price => {
    if(price>avg){
        console.log("Le produit dont le prix est " + price + " est trop cher.")
    }else{
        console.log("Prix raisonnable.");
        
    }
});