var expect = require("expect.js");
var scorer = require('../frequency_scorer.js');
var Trie = require('../trie.js');

describe("the test scorer", function() {
    beforeEach(function(){
        this.trie = new Trie();
    });

    it("should start empty", function(){
        scorer(this.trie);
        expect(this.trie.score).to.equal(0);
    });

    it("should accept one value", function(){
        this.trie.insert('foo');
        scorer(this.trie);
        expect(this.trie.score).to.equal(1);
    });

    it("should score three values", function(){
        this.trie.insert('foo');
        this.trie.insert('bar');
        this.trie.insert('baz');
        scorer(this.trie);
        expect(this.trie.score).to.equal(3);
    });

    it("should work recursively", function(){
        this.trie.insert('foo');
        this.trie.insert('bar');
        this.trie.insert('baz');
        scorer(this.trie);

        expect(this.trie.obtain('ba').score).to.equal(2);
        expect(this.trie.obtain('baz').score).to.equal(1);
        expect(this.trie.obtain('bar').score).to.equal(1);
    });
});