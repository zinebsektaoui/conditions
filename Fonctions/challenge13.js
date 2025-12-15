function motsLongs(tabMots, longueur){
    tabMots.forEach(element => {
        if(element.length >= longueur){
            console.log(element);
            
        }
    });
}
motsLongs(["Sektaoui", "Caisse", "ENAA"], 5)