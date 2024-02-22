import express from 'express'
const app=express();
import mongoose from 'mongoose';

app.use(express.json());

const UserSchema=mongoose.Schema({
    username: String,
    email:String
})
const User=mongoose.model("user",UserSchema);
 async function connectoDb(req,res,next){
        const connectionString='mongodb+srv://admin:1wBbD6m8brGWP1jM@cluster0.jhhmwud.mongodb.net/newusers'
        mongoose.connect(connectionString)
        next();
}
    
app.use(connectoDb);
app.get("/users", async (req,res)=>{
    const result=await User.find({})
        res.json({"usersdata":result});
})
app.use((req,res,next)=>{
    res.json("error ocuured!")
})
app.listen(3000);