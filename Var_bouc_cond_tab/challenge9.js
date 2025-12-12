const p = require("prompt-sync")()

let array = []
while(true){
    console.log("----------------------------------------------------")
    console.log("Simulateur de file d'attente ")
    console.log("1 : Ajouter une personne");
    console.log("2 : Servir une personne");
    console.log("3 : Finir la prodcédure");
    console.log("----------------------------------------------------")
    let nb = Number(p("Tapez 1, 2 ou 3 selon votre choix : "));
    switch(true){
        case nb===1 : 
            let name = p("Entrer le nom du personne que vous voulez ajouter dans la liste : ")
            array.push(name)
            break
        case nb === 2 :
            array.shift()
            break
        case nb === 3 : 
            console.log("Les personnes restantes dans la file : " + array);
            return // sortir du programme
    }
}