import express from 'express'
const app=express();
import mongoose from 'mongoose';

app.use(express.json());

let  validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log( re.test(email));
    return re.test(email);
};

const UserSchema=mongoose.Schema({
    username: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: [validateEmail],
       // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
})
const User=mongoose.model("user",UserSchema)
function adduserwithValidation(req,res,next){
        const connectionString='mongodb+srv://admin:1wBbD6m8brGWP1jM@cluster0.jhhmwud.mongodb.net/newusers'
        mongoose.connect(connectionString)
        const username=req.body.username;
        const email=req.body.email;
            if(validateEmail(email)){
               const newuser=new User({
                username:username,
                email:email
            })
            newuser.save();
            next(); 
            }  
            else{
                res.send("some error in email check it ")
            }
}
    
app.use(adduserwithValidation);
app.get("/users", (req,res)=>{
    res.send('done sucessfully');
})
app.use((req,res,next)=>{
    res.json("error ocuured!")
})
app.listen(3000);