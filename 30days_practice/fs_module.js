const fs=require('fs')
fs.appendFileSync('see.txt','updated version')

fs.readFile('see.txt','utf-8',(err,data)=>{
    console.log(data);
})
// fs.unlinkSync('see.txt')