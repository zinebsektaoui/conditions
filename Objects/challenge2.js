// 1
let etudiant = {
    nom : "Sektaoui Zineb",
    age : 20
}
function sePresenter(){
    console.log("Bonjour, je m’appelle " + etudiant.nom + " et j'ai " + etudiant.age + " ans.");
}
sePresenter()
console.log("-------------------------------------------");


// 2
let personne = {
    firstName : "Zineb",
    secondName : "SEKTAOUI",
    age : 20,
    school : "ENAA"
}
for(let key in personne){
    console.log(key + " : " + personne[key]);
    
}
console.log("-------------------------------------------");

// 3
let classe = {
    etudiants : ["ZINEB", "SARA", "SALMA"]
}
function afficherEtudiants(){
    console.log(classe.etudiants);
}
afficherEtudiants()
console.log("-------------------------------------------");



// 4
let livre = [
    {
        title : "la boite a merveilles",
        auteur : "Ahmad Sefrioui",
        annee : 1954
    },{
        title : "Livre 2",
        auteur : "Auteur2",
        annee : 2001
    },{
        title : "Livre 3",
        auteur : "Auteur 3",
        annee : 2009
    }
]
for(element of livre){
    console.log(element.title);
}
console.log("-------------------------------------------");


// 5
function trouverLivre(title){
    for(el of livre){
        if(title === el.title){
            console.log(el);
        }
    }
}
trouverLivre("Livre 3")