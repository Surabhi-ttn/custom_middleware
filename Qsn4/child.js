const { execFile } = require('child_process');
  
const child = execFile('node', ['stream.js'], 
        (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});