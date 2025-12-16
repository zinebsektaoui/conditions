// 1
let entreprise = {
    adresse : {
        rue : "Rue1",
        ville : "Ville1",
        codePostal : 123
    }
}
console.log(entreprise.adresse.ville)
console.log("-------------------------------------------");



// 2
let produits = [
    {
        nom : "Biscuit",
        prix : 1.5,
        quantite : 20
    },{
        nom : "King blanc",
        prix : 2,
        quantite : 50
    },{
        nom : "Lava",
        prix : 1,
        quantite : 25
    }
]
for(el of produits){
    console.log(" la valeur totale en stock pour " + el.nom + " : " + el.prix * el.quantite);
    
}
console.log("-------------------------------------------");


// 3
class Animal{
    constructor(nom, type){
        this.nom = nom
        this.type = type
    }
    parler(){
        console.log("Le " + this.nom + " miaule");
        
    }
}
const animal = new Animal("chat", "Domestiques")
animal.parler()
console.log("-------------------------------------------");


// 4
const employes = [
    {
        name : "Ihsane",
        salaire : 3092
    },{
        name : "Ayoub",
        salaire : 2000
    },{
        name : "Sara",
        salaire : 20000
    },{
        name : "Ikrame",
        salaire : 1090
    }
]

for(el of employes){
    if(el.salaire>3000){
        console.log(el);
        
    }
}
console.log("-------------------------------------------");


// 5
function cloner(obj){
    console.log(obj);
}
cloner(produits)