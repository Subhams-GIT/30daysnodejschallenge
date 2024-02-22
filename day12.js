const express=require('express')
const app=express()

class ips{
    constructor(ip,count){
        this.ip=ip;
        this.count=count
    }
}
const details=[]
const limit=4

function ratelimiter(req,res,next){
    const ip=req.ip
    let found=false;
    for(let i=0;i<details.length;i++){
        if (ip === details[i].ip) {
            found = true;
            console.log("hello");
            if (details[i].count >= limit) {
                return res.status(429).send("No more requests allowed from this IP");
            }
            details[i].count++;
            console.log(details[i].count);
            break;
        }
    } 
    if (!found) {
        const count = 1;
        const d = new ips(ip, count);
        details.push(d);
      
    } 
    next();
}
app.get("/",ratelimiter,(req,res)=>{
    res.send("welcome ")
})
app.listen(3000);