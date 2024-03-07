const express=require('express')
const app=express()
const port =3000

function errorhandlingMiddleware(err,req,res,next){
	const statuscode=err.statusCode || 500
	if(statuscode == 500 )
	res.send('Something went wrong in server!')
}
app.get('/',(req,res,next)=>{
	throw new Error();
})
app.use(errorhandlingMiddleware);
app.listen(port)
