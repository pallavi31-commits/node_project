// Synchonous
// const fs = require('fs')
// console.log("Before starting to read")
// const content = fs.readFileSync("input.txt")
// console.log("output content is : " + content)
// console.log("last line")

//Asynchrounous
const fs = require('fs')
console.log("Before starting to read")
fs.readFile('input.txt',(err,content)=>{
    if(err){
        return console.log(err)
    }
    console.log("content of the file is : " + content)
})
console.log("last line")