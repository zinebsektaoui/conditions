let voiture = {
    marque : "BMW",
    modele : "M5",
    annee : 2009
}
console.log(voiture); // 1. aff object kamel

console.log(voiture.marque, voiture.annee) // 2. aff marque, anne

voiture.annee = 2000 // 3. update the year
console.log(voiture);

let color = voiture.couleur = "black" // 4. add couleur to voiture
console.log(voiture);

delete voiture.modele // 5. supp modele
console.log(voiture);