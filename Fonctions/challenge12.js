let arr = []
function tableMultiplication(n){
    for(i=1; i<=10; i++){
        let result = n * i
        arr.push(result)
    }
    console.log(arr);   
}
tableMultiplication(2)