function filtrerPairs(arr=[]){
    let pairNum = []
    for(i=0; i<=arr.length; i++){
        if(arr[i]%2===0){
            pairNum.push(arr[i])
        }
    }
    console.log(pairNum);
}
filtrerPairs([10, 33, 5, 42, 9, 11, 100])