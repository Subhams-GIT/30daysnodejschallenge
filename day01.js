const fs=require("fs");

 function  readFileContent(filepath){
    fs.readFile(filepath,'utf-8',(err,data)=>{
        if(err){
                console.log(err)
            
        }else{
             console.log('file-content');
                console.log(data);
        }
       
    })
}
readFileContent('test-file/file1.txt')
readFileContent('test-file/empty-file.txt')
readFileContent('test-file/nonexistentfile.txt')