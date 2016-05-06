// when calling 'node call-another-command.js', this will call a shell command in that script

var child_process = require('child_process');
var installOutput = child_process.execSync('git status', { encoding: 'utf8' });
process.stdout.write(installOutput);




