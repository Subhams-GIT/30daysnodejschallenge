import express from "express"
const app=express();
const port=3000;
app.use(express.json())
app.get('/',(req,res)=>{
    console.log(req.body);
    res.send('hi')
})
app.listen(port);
