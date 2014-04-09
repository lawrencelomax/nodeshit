var Trie = require('./trie.js')

module.exports = function(wordemitter, callback) {
	var trie = new Trie();
	
	wordemitter.on('word', function(word){
		var node = trie.insert(word);
	}).on('end', function() {
		callback(trie);
	});	
};