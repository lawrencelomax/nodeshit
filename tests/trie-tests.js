var Trie = require('../trie.js')

exports.test_trie = function(test) {
	t = new Trie();
	
	test.equals(t.contains(""), false);
	test.equals(t.contains("foo"), false);
	test.equals(t.contains("food"), false);
	test.equals(t.contains("bar"), false);
	
	t.insert("foo");
	test.equals(t.contains(""), false);
	test.equals(t.contains("foo"), true);
	test.equals(t.contains("food"), false);
	test.equals(t.contains("bar"), false);
	
	t.insert("food");
	test.equals(t.contains(""), false);
	test.equals(t.contains("foo"), true);
	test.equals(t.contains("food"), true);
	test.equals(t.contains("bar"), false);
	
	t.insert("bar");
	test.equals(t.contains(""), false);
	test.equals(t.contains("foo"), true);
	test.equals(t.contains("food"), true);
	test.equals(t.contains("bar"), true);
	
	test.done();
};