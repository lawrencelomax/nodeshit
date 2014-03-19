module.export = function(trie) {
	var scorer = function score(trie) {
		var count = trie.terminal ? 1 : 0;

		if(this.children.length == 0) {
			this.score = count;
		} else {
			for(childKey in trie.children) {
				count += score(trie.children[childKey]);
			}
		}
		
		return count;
	}
	
	scorer(trie);
	return trie;
};