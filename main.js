builder = require('./triebuilder')

var filename = process.argv[2];
console.log('using file ' + filename);

var fs = require('fs');
var readline = require('readline');
var rd = readline.createInterface({
	input: fs.createReadStream(filename),
	output: process.stdout,
	terminal: false
});

var trie = builder(function(callback){
	rd.on('line', function(line) {
		callback(line);
	});
});
