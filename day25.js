import express from 'express'
const app=express();
import mongoose from 'mongoose'
const port= 3000;
app.use(express.json())
const connection_string='mongodb+srv://admin:1wBbD6m8brGWP1jM@cluster0.jhhmwud.mongodb.net/products'
mongoose.connect(connection_string);

const pro_Schema= mongoose.Schema({
	name:String,
	price:Number,
	quantity:Number,
});
const product_details=mongoose.model('productSchema',pro_Schema);
async function ProductnameIndex(){
	await product_details.collection.createIndex({name:1});
	console.log('indexing done!');
}

app.put('/',(req,res)=>{
	const product=new product_details({
		name:req.body.name,
		price:req.body.price,
		quantity:req.body.quantity,
	})
	product.save();
	ProductnameIndex();
	res.send('sucessfully created product')	
})
app.listen(port);