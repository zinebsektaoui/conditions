function sommeTableau(array = []){
    let somme = 0
    for(element of array){
        somme = somme + element
        element++
    }
    console.log(somme);
}
sommeTableau([3, 43, 65, 10])