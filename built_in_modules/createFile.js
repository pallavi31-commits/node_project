// Synchronous Method
// const fs = require('fs');
// fs.writeFileSync('output1.txt', 'Hello Students');
// console.log('File Created Successfully');

// Asynchronous Method
const fs = require('fs');
fs.writeFile('output2.txt', 'Hello Students again',(err)=>{
    if(err){
        return console.log(err)
    }
    console.log('written successfull')
})