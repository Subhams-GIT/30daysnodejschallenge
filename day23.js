import express from 'express'
const app=express();
import mongoose from 'mongoose'
const port= 3000;
app.use(express.json())
const connection_string='mongodb+srv://admin:1wBbD6m8brGWP1jM@cluster0.jhhmwud.mongodb.net/productswithcategory'
mongoose.connect(connection_string);

const category_schema=mongoose.Schema({
	name:String
});
const category=mongoose.model('category',category_schema);
const pro_Schema= mongoose.Schema({
	name:String,
	price:Number,
	quantity:{type: Number , required:true},
	category: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required:true }
});
const product_details=mongoose.model('productSchema',pro_Schema);
async  function getproductswithcategory(){
	try {
		const details=await product_details.find({}).populate('category').exec()
	console.log(details);
	} catch (error) {
		console.log(error);
	}
}
app.get('/',async (req,res)=>{

	const cat_detail=await category.create({name:'stationary'})
	const name=req.body.name;
	const price=req.body.price;
	const qty=req.body.qty;
	await product_details.create({name,price,quantity:qty,category:cat_detail._id});
	// getproductswithcategory({name:'pencil',price:10,quantity:100,typeOfProduct:category._id})
	getproductswithcategory()
	res.send('ok')
})
app.listen(port);
