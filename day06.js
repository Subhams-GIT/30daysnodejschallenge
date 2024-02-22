import { express } from "express";
const app=express();

app.get('/greet',function greetHandler(req,res){
    
        const name=req.query.name;
        if(name === undefined)
            res.send(`Hello guest`)
        else
        res.send(`Hello `+ name)
})
app.listen(3000,()=>{
    console.log('server is running sucessfully');
});