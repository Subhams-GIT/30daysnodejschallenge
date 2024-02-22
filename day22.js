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
	id:Number
})
const product_details=mongoose.model('productSchema',pro_Schema);
app.put('/create',function createProduct(req,res){
	try {
		const product=new product_details({
			name:req.body.p_name,
			price:req.body.p_price,
			quantity:req.body.quantity,
			id:req.body.id
		})
		product.save();
		res.send('sucessfully created product')
	} catch (error) {
		res.send('some error ocurred while creating product')	
	}
})
app.get('/getlist',async function getProduct(req,res){
	const products=await product_details.find({});
	res.json({'products list':products});
})
app.delete('/deleteProduct',async function deleteProduct(req,res){
	const id=req.body.pId;
	try {
			const product=await product_details.deleteOne({id})
			res.send('sucessfully deleted the product details!')

	} catch (error) {
		res.send('some error!')
	}

})
async function updatelist(name,price,id){
	
	const product=await product_details.updateOne({id},{$set:{name:name,price:price}});

}
app.patch('/update',async function updateProduct(req,res){
	const id=req.body.pId;
	const name=req.body.name;
	const price=req.body.price;
	
	
	updatelist(name,price,id);
	res.json('sucessfully updated');

})
app.listen(port);
/*
git remote add origin https://github.com/Subhams-GIT/30daysnodejschallenge.git
git branch -M main
git push -u origin main
*/