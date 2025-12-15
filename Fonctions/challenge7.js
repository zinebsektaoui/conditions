function produitTableau(arr=[]){
    let result = 1
    for(i=0; i<arr.length; i++){
        result = result * arr[i]
    }
    console.log(result);
}
produitTableau([2, 55, 10, 4])