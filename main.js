var filename = process.argv[2];

if(filename) {
	console.log('Using file ' + filename);
	
	var builder = require('./trie_filebuilder.js');
	builder.exports(filename, function(trie){
		console.log('The trie is ' + trie);
	});
} else {
	throw { name: 'FooError', message: 'No File Provided' };
}