function compterOccurrences(arr = [], val){
    let count = 0
    for(let i=0; i<=arr.length; i++){
        if(arr[i]==val){
            count++
        }
    }
    console.log(count);    
}
compterOccurrences([43, 10, 34, 66, 10, 78, 10], 78)

// filter