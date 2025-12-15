const lodash = require("lodash")

function moyenne(arr=[]){
    let sum = lodash.sum([...arr])
    let avg = sum/arr.length
    console.log(sum);
    console.log(avg);
}
moyenne([10, 33, 98, 190])