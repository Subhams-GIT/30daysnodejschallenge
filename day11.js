const express=require('express')
const app=express();
const jwt=require('jsonwebtoken')
var bodyparser=require('body-parser')
const jwtpassword='123456';

function authenticationMiddleware(req,res,next){
    const token=req.headers.token;
    const password=req.headers.password;
    if(!token){
        var newtoken= jwt.sign({ password }, jwtpassword);
        return res.json({
          newtoken,
        });
        next();
    }
    try{
        const ans =jwt.verify(token,jwtpassword)
        console.log(ans);
    }
    catch(error){
        console.log('some error in token');
    }
    next();
}
app.get('/',authenticationMiddleware,(req,res)=>{
  res.send("ok ")
})
app.listen(3000);   
