const path=require('path')
function resolvePath(relativepath){
	console.log(__dirname);
	console.log( path.resolve(__dirname,relativepath))
}

resolvePath('../test-file/file1.txt');
// Expected Output: Resolved Path: /Users/username/project/folder/file.txt

resolvePath('nonexistent-folder/file.txt');
// Expected Output: Resolved Path: /Users/username/nonexistent-folder/file.txt