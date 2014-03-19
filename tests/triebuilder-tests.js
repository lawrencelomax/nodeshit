triebuilder = require('../triebuilder.js')

exports.test_builder = function(test) {
	var wordfire = undefined;
	var stream = function(callback) {
		wordfire = callback;
		console.log('callback ' + callback);
	};
		
	var trie = triebuilder(stream);
	wordfire('foo');
	test.equals(trie.contains("foo"), true);
	test.equals(trie.contains("food"), false);
	test.equals(trie.contains("bar"), false);
	
	wordfire('bar');
	test.equals(trie.contains("foo"), true);
	test.equals(trie.contains("food"), false);
	test.equals(trie.contains("bar"), true);
	
	wordfire('food');
	test.equals(trie.contains("foo"), true);
	test.equals(trie.contains("food"), true);
	test.equals(trie.contains("bar"), true);
	
	test.done();
};