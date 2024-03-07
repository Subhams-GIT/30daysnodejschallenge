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
const products=mongoose.model('productSchema',pro_Schema);

async function getProductStatistics(){
	const totalResult = await products.aggregate([
		{ $group: { _id: null, total: { $sum: 1 } } }
    ]);

    const averagePriceResult = await products.aggregate([
        { $group: { _id: null, averageprice: { $avg: "$price" } } }
    ]);

    const highestQuantityResult = await products.aggregate([
        { $group: { _id: null, highestquantity: { $max: "$quantity" } } }
    ]);
	console.log(totalResult);
	console.log(averagePriceResult);
	console.log(highestQuantityResult);
}
async function createproducts(){
	const product1=new products({name:'asus',price:150000,quantity:2000})
	const product2=new products({name:'apple',price:165000,quantity:1000})
	const product3=new products({name:'samsung',price:1500000,quantity:1000});
	await product1.save();
	await product2.save();
	await product3.save();
	getProductStatistics();
}
createproducts();
app.listen(port);