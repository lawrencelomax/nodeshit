var Trie = require('./trie.js')

module.exports = function(wordstream) {
	var trie = new Trie();
		
	wordstream( function(value) {
		console.log(value + " " + typeof value);
		var node = trie.insert(value);
	});
	
	return trie;
};