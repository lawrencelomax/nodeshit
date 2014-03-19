module.exports = function(trie) {
	var scorer = function score(trie) {
		// if(typeof Object.emptyAtLevel !== 'function') {
		// 	Object.emptyAtLevel = function() {
		// 		var hasProperty = false;
		// 		for(property in this) {
		// 			if(this.hasOwnProperty(property)) {
		// 				hasProperty = true;
		// 			}
		// 		}
		// 		return hasProperty;
		// 	};
		// }
		// 
		// console.log("method " + {}.emptyAtLevel());
		
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