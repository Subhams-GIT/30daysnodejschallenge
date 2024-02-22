const cp=require('child_process');
const { stdout, stderr } = require('process');
function executeCommand(command){
	cp.exec(command,(stdout,stderr,err)=>{
		if(err){
			console.error(err);
			return ;
		}
		if( stderr){
			console.log(stderr);
			return ;
		}
		console.log(stdout);
	})

}
// cp.execSync('ls ')
executeCommand('ls -la');

executeCommand('echo "Hello, Node.js!"');
