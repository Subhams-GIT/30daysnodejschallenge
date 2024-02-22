const express=require('express');
const mongoose=require('mongoose');
const app=express();

app.use(express.json());

const UserSchema=mongoose.Schema({
    username: String,
    email:String
})
const User=mongoose.model("user",UserSchema);
function connectoDb(req,res,next){
    const username=req.body.username;
    const email=req.body.email;
        const connectionString='mongodb+srv://admin:@cluster0.jhhmwud.mongodb.net/newusers'
        mongoose.connect(connectionString)
        const newuser=new User({
            username,
            email
        })
        newuser.save();
        next();
}
    
app.use(connectoDb);
app.get("/",(req,res)=>{
    res.json("sucessfull");
})
app.use(()=>{
    res.json("error ocuured!")
})
app.listen(3000);
