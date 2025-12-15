function doubler(arr=[]){
    multiple = []
    arr.forEach(element => {
        let result = element*2
        multiple.push(result)
    });
    console.log(multiple);
    
}
doubler([10, 4, 5, 1])