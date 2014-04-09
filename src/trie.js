module.exports = function Trie() {
	var enumerator = function enumerate(trie, parents, callback) {
		var word = parents + (trie.letter === null || trie.letter === undefined ? "" : trie.letter);
						
		if(word) {
			callback(trie, word);
		}
		
		for(childKey in trie.children) {
			var child = trie.children[childKey];
			enumerate(child, word, callback);
		}
	};
	
	var obtainer = function obtainer(trie, stem) {
		if(!stem || stem.length < 1) {
			return trie;
		}

		var letter = stem[0];
		if(trie.children[letter]) {
			var subTrie = trie.children[letter];
			return obtainer(subTrie, stem.slice(1));
		}
		
		return null;
	};
	
	return {
		letter: null,
		children: {},
		terminal: false,
		insert: function (word) {
			word = word.toLowerCase();
			
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
		},
		obtain: function(word) {
			var trie = obtainer(this, word);
			return trie;
		},
		contains: function(word) {
			word = word.toLowerCase();
			
			var subtrie = obtainer(this, word);
			if(subtrie && subtrie.terminal) {
				return true;
			}
			
			return false;
		},
		enumerate_words: function(callback) {
			enumerator(this, "", function(trie, word) {
				if(trie.terminal) {
					callback(word);
				}
			});
		}
	};	
};