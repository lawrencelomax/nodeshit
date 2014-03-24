builder = require('./triebuilder.js')

module.exports = function(filename) {
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
	
	return trie;
};

var filename = process.argv[2];
if(filename) {
	console.log('Using file ' + filename);
	var trie = module.exports(filename);
	console.log('The trie is ' + trie);
} else {
	throw { name: 'FooError', message: 'No File Provided' };
}