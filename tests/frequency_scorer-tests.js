var scorer = require('../frequency_scorer.js');
var Trie = require('../trie.js');

exports.test_scorer = function(test) {
	trie = new Trie();

	scorer(trie);
	test.equals(trie.score, 0);

	trie.insert('foo');
	scorer(trie);
	test.equals(trie.score, 1);
	
	trie.insert('foo');
	scorer(trie);
	test.equals(trie.score, 1);	
	
	trie.insert('bar');
	trie.insert('baz');
	scorer(trie);
	test.equals(trie.score, 3);
	
	test.equals(trie.obtain('ba').score, 2);
	test.equals(trie.obtain('baz').score, 1);
	test.equals(trie.obtain('bar').score, 1);
	
	test.done();
};
