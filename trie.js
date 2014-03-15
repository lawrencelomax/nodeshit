// var fs = require('fs');
// var readline = require('readline');

// var filename = process.argv[2]
// console.log("filename: " + filename)

function Trie() {
	this.letter = null;
	this.childen = {};
};

Trie.prototype.insert = function (word) {
	if(word.length < 1) {
		return this;
	}
	var letter = word[0];
	if(this.children[letter]) {
		return this.children[letter].insert(word.slice(1));
	}
	var subTrie = new Trie(letter);
	this.children[letter] = subTrie;
	return subTrie.insert(word.slice(1));
};

Trie.prototype.contains = function(word) {
	if(word.length < 1) {
		return true;
	}
	var letter = word[0];
	if(this.children[letter]) {
		return this.children[letter].contains(word.slice(1));
	}
	return false;
};

var trie = new Trie();
trie.insert("foo");
trie.insert("bar");

console.log(trie)

//var rd = readline.createInterface({
//    input: fs.createReadStream(filename),
//    output: process.stdout,
//    terminal: false
//});
// 
// rd.on('line', function(line) {
//     console.log(line);
// });
