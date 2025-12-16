const p = require("prompt-sync")()

let tasks = [{id:1, description: "Apprendre JavaScript", isDone: false}]


while(true){
    console.log("--------------------To Do List------------------------");
    console.log("0. Sortir");
    console.log("1. Afficher les tâches");
    console.log("2. Ajouter une tâche");
    console.log("3. Rechercher une tâche");
    console.log("4. Modifier une tâche");
    console.log("5. Supprimer une tâche");
    console.log("6. Marquer une tâche comme terminée");
    console.log("7. Afficher tâches terminées / en attente");
    console.log("------------------------------------------------------");
    let choice = Number(p("Donner un nombre : "))
    
    if(choice===0){break}
    switch(true){
        case choice===1 : console.log("Les taches disponibles : " + tasks)
        case choice===2 : addTask(); break
    }
}

function addTask(){
    let description = p("Donner une description : ")
    let status = p("Quel est le status de votre tache ? ")
}