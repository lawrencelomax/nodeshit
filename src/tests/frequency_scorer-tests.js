var expect = require("expect.js");
var scorer = require('../frequency_scorer.js');
var Trie = require('../trie.js');

describe("the test scorer", function() {
    var trie;
    beforeEach(function(){
        trie = new Trie();
    });

    it("should start empty", function(){
        scorer(trie);
        expect(trie.score).to.equal(0);
    });

    it("should accept one value", function(){
        trie.insert('foo');
        scorer(trie);
        expect(trie.score).to.equal(1);
    });

    it("should score three values", function(){
        trie.insert('foo');
        trie.insert('bar');
        trie.insert('baz');
        scorer(trie);
        expect(trie.score).to.equal(3);
    });

    it("should work recursively", function(){
        trie.insert('foo');
        trie.insert('bar');
        trie.insert('baz');
        scorer(trie);

        expect(trie.obtain('ba').score).to.equal(2);
        expect(trie.obtain('baz').score).to.equal(1);
        expect(trie.obtain('bar').score).to.equal(1);
    });
});