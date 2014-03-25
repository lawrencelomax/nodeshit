module.exports = function(trie) {
	var scorer = function score(trie) {		
		var count = trie.terminal ? 1 : 0;
		for(childKey in trie.children) {
			count += score(trie.children[childKey]);
		}
		
		trie.score = count;
		return count;
	}
	
	scorer(trie);
	return trie;
};