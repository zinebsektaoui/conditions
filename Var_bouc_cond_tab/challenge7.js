const p = require("prompt-sync")()

let ch = p("Donner un mot : ")
for(i=1; i<=ch.length; i++){
    console.log(ch.substring(0,i))
}