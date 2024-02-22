function add(a,b){
	console.log(a+b);
}
console.log(myname);
/* 
every file is treated as a module and we can export it from one file to another */
module.exports={
	addition:add
}