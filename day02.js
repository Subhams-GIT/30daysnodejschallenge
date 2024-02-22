const fs=require("fs")
//const __dirname=require('_d')
function writetoFile(path,content){
 fs.writeFile(path,content, 'utf-8',(err)=>{
	if(err){
		console.log(err);
	}
	else{
		console.log('Data written to ', path)//-__dirname);
		fs.readFile(path,'utf-8',(err,data)=>{
			console.log('the data of written file is ' + data);
		})
	}
 })
}
writetoFile('test-file/output1.txt', 'Sample content.')
writetoFile('test-file/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
