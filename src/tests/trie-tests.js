var Trie = require('../trie.js');
var expect = require("expect.js");

describe("the trie", function(){
    var trie = new Trie();

    beforeEach(function() {
       trie = new Trie();
    });

    describe("initialized state", function(){
        expect(trie.contains("")).to.not.be.ok();
        expect(trie.contains("foo")).to.not.be.ok();
        expect(trie.contains("food")).to.not.be.ok();
        expect(trie.contains("bar")).to.not.be.ok();
    });

    describe("inserting words", function(){
        trie.insert("foo");
        expect(trie.contains("")).to.not.be.ok();
        expect(trie.contains("foo")).to.be.ok();
        expect(trie.contains("food")).to.not.be.ok();
        expect(trie.contains("bar")).to.not.be.ok();

        trie.insert("food");
        expect(trie.contains("")).to.not.be.ok();
        expect(trie.contains("foo")).to.be.ok();
        expect(trie.contains("food")).to.be.ok();
        expect(trie.contains("bar")).to.not.be.ok();

        trie.insert("bar");
        expect(trie.contains("")).to.not.be.ok();
        expect(trie.contains("foo")).to.be.ok();
        expect(trie.contains("food")).to.be.ok();
        expect(trie.contains("bar")).to.be.ok();
    });

    describe("case insensitivity", function(){
        it("should be case insensitive", function(){
            trie.insert("FoO");
            expect(trie.contains("")).to.not.be.ok();
            expect(trie.contains("foo")).to.be.ok();
            expect(trie.contains("food")).to.not.be.ok();
            expect(trie.contains("bar")).to.not.be.ok();

            trie.insert("BaR");
            expect(trie.contains("")).to.not.be.ok();
            expect(trie.contains("foo")).to.be.ok();
            expect(trie.contains("food")).to.not.be.ok();
            expect(trie.contains("bar")).to.be.ok();
        });
    });

    describe("obtaining subtries", function(){
        it("should obtain subtries", function(){
            expect(trie.obtain('f')).to.be(null);

            trie.insert('foo');
            trie.insert('food');
            trie.insert('baz');

            expect(trie.obtain('f')).to.equal(trie.obtain('f'));
        });
    });

    describe("test enumerator", function(){
        var arrayer = function(trie) {
            var array = [];
            var i = 0;
            trie.enumerate_words(function (word){
                array[i] = word;
                i++;
            });
            return array;
        }

        it("should enumerate in order", function(){
            trie.insert('foo');
            var array = arrayer(trie);
            expect(array[0]).to.equal("foo");
        });
    });
});