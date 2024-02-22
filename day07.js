const express=require('express')
const app=express();

app.use(requestLoggerMiddleware)
function requestLoggerMiddleware(req,res,next){
   console.log( req.method );
   const timestamp=new Date().toLocaleString();
   console.log(timestamp);
   next();
}
app.get("/sayhello",(req,res)=>{
    console.log('hello from server');
    res.send('done ')
})
app.listen(3000);