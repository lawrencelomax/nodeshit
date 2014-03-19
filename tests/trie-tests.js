var Trie = require('../trie.js')

exports.test_basic = function(test) {
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

exports.test_casesensitivity = function(test) {
	t = new Trie();
	
	test.equals(t.contains("foo"), false);
	
	t.insert("FoO");
	test.equals(t.contains("foo"), true);
	test.equals(t.contains("fOO"), true);
	test.equals(t.contains("Bar"), false);
	test.equals(t.contains("BAR"), false);
	
	t.insert("BaR");
	test.equals(t.contains("foo"), true);
	test.equals(t.contains("fOO"), true);
	test.equals(t.contains("Bar"), true);
	test.equals(t.contains("BAR"), true);
	
	test.done();
};

exports.test_obtain = function(test) {
	t = new Trie();
	
	test.equals(t.obtain('f'), null);
	
	t.insert('foo');
	t.insert('food');
	t.insert('baz');
	
	test.equals(t.children['f'], t.obtain('f'));
	
	test.done();
};

var arrayer = function(trie) {
	var array = [];
	var i = 0;
	trie.enumerate_words(function (word){
		array[i] = word;
		i++;
	});
	return array;
}

exports.test_enumerator = function(test) {
	t = new Trie();
	
	t.insert('foo');
	var array = arrayer(t);
	test.equals(array[0], "foo");
	
	test.done();
}