const express=require('express');
const nodeCache=require('node-cache')
const app=express();
const cache=new nodeCache({
   stdTTL:60
})

app.use(express.json())

app.post('/cachetest',function hello(req,res){
   const username=req.body.username;
   const now=Date.now();
   const cachedata=cache.get(username)
   if(cachedata){
    res.json({msg:cachedata})
   }
   else{
    cache.set(username,JSON.stringify(username))
    res.send('non cache response');
   }
})
app.listen(3000);