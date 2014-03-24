var Trie = require('./trie.js')

module.exports = function(wordstream) {
	var trie = new Trie();
		
	wordstream( function(value) {
		var node = trie.insert(value);
	});
	
	return trie;
};