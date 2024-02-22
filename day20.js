import express from 'express'
const app=express();
import mongoose from 'mongoose';
app.use(express.json())

const UserSchema=mongoose.Schema({
    username: String,
    age:Number
})
const User=mongoose.model("user",UserSchema);
const connectionString='mongodb+srv://admin:@cluster0.jhhmwud.mongodb.net/usersdata'
mongoose.connect(connectionString)
app.post("/users", async (req,res)=>{
    const username=req.body.username;
        const age=req.body.age;
       
        const newuser=new User({
            username,
            age
        })
        newuser.save();
        res.send('sucess')
})
app.get('/getaverage',async (req,res)=>{
    const users = await User.find();
        const totalAge = users.reduce((acc, user) => acc + user.age, 0);
        const averageAge = totalAge / users.length;
        res.send({ averageAge });
   // res.send(age);
})
app.use((req,res,next)=>{
    res.json("error ocuured!")
})
app.listen(3000);
