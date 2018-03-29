#!/usr/bin/env node

var os = require('os');
var platform = os.platform();
var child_process = require('child_process');

var child;
if (platform === 'darwin') {
  child = child_process.execFile(__dirname+'/vendor/macos/hugo', process.argv.slice(2))

} else if (platform === 'linux') {
  child = child_process.execFile(__dirname+'/vendor/linux/hugo', process.argv.slice(2))
}

child.stdout.pipe(process.stdout);
child.on('exit', function(code) {
  process.exit(code)
})
