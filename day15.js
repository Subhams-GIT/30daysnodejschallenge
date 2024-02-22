const express=require("express")
const app=express();
const PORT=8000;

app.use(express.json())

function loggingMiddleware(req,res,next){
    const time=new Date();
    const current=time.toLocaleString();
    const {method,url,headers,body,}=req;
    const info=`${method},
    ${url},${JSON.stringify(headers)},${JSON.stringify(body)},${current}`
    console.log(info);
    next();
}
app.use(loggingMiddleware)
app.get('/assignment15',(req,res)=>{
    res.send(`you have done day 15 task !!!!`)
})
app.listen(PORT,()=>{
    console.log('server is running ');
})