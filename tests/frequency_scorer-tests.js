require('../frequency_scorer.js');
Trie = require('../trie.js');

exports.test_scorer = function(test) {
	trie = new Trie();
	
	test.equals('foo'.score, 0);
};
