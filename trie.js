function Trie() {
	this.letter = null;
	this.children = {};
	this.terminal = false;
};

Trie.prototype.insert = function (word) {
	if(!word || word.length < 1) {
		this.terminal = true;
		return this;
	}
	var letter = word[0];
	if(this.children[letter]) {
		return this.children[letter].insert(word.slice(1));
	}
	
	var subTrie = new Trie();
	subTrie.letter = letter;
	this.children[letter] = subTrie;
	return subTrie.insert(word.slice(1));
};

Trie.prototype.contains = function(word) {
	if(!word || word.length < 1) {
		return this.terminal;
	}
	var letter = word[0];
	if(this.children[letter]) {
		return this.children[letter].contains(word.slice(1));
	}
	return false;
};

module.exports = Trie;