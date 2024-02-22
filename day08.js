import express from "express";
const app=express();
const port=8000;

// handle error
function errhandlingmiddleware(err,req,res,next){
    res.send('send a positive number ')
}

//routes for checking the number
app.get('/positive',(req,res,next)=>{
    const num=Number.parseInt(req.query.number);
    // num=num.parseInt(num)
    if(num>0 && Number.isInteger(num)){
        console.log('num');
        res.status(200).send('you have send the right input'+num)
    }
    else{
        // throwing custom error if number is negative 
        const error=new Error('number must be positive')
        next(error)
    }
})
app.use(errhandlingmiddleware);
app.listen(port,()=>{
    console.log('server running sucessfully');
})