function supprimerDoublons(arr=[]){
    let result = [...new Set(arr)]
    console.log(result);
    
}
supprimerDoublons([23, 10, 23, 43, 5, 5, 33])