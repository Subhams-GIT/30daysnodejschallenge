const express=require('express')
const app=express();
const PORT=3000;
const path=require('path')
const fs=require('fs')


app.use(express.static(path.join(__dirname, 'project')))


app.get('/', async(req,res)=>{
   res.sendFile(path.join(__dirname, 'project','index.html'))

})

app.get('/style/style.css',(req,res)=>{
    res.sendFile(path.join(__dirname, 'project','style.css'))

})
app.listen(PORT,()=>{
    console.log('server running ');
})