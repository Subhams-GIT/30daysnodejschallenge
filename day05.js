const path=require('path')
function checkFileExtension(Filepath,expectedExtension){
	const ext=path.extname(Filepath)
	if(ext == expectedExtension){
		console.log('File has the expected extension: ', ext);
	}else{
		console.log('File does not have the expected extension. Expected:',expectedExtension, 'Actual:' , ext );
	}
}
checkFileExtension('test-file/file1.txt', '.txt');
// Expected Output: File has the expected extension: .txt

checkFileExtension('test-files/empty-file.txt', '.jpg');
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png