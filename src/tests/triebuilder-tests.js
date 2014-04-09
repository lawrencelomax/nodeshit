var triebuilder = require('../triebuilder.js')
var EventEmitter = require('events');
var expect = require('expect.js');

describe("the trie builder", function(){
    beforeEach(function(){
        this.emitter = new EventEmitter.EventEmitter();
    });

    it("should accept a word", function(){
        triebuilder(this.emitter, function(trie){
            console.log(trie);
            expect(trie.contains('foo')).to.be.ok();
            expect(trie.contains('food')).to.not.be.ok();
            expect(trie.contains('bar')).to.not.be.ok();
        });
        this.emitter.emit('word', 'foo');
        this.emitter.emit('end');
    });

    it("should accept a moar words", function(){
        triebuilder(this.emitter, function(trie){
            console.log(trie);
            expect(trie.contains('foo')).to.be.ok();
            expect(trie.contains('food')).to.not.be.ok();
            expect(trie.contains('bar')).to.be.ok();
        });
        this.emitter.emit('word', 'foo');
        this.emitter.emit('word', 'bar');
        this.emitter.emit('end');
    });

    it("should accept the most words", function(){
        triebuilder(this.emitter, function(trie){
            expect(trie.contains('foo')).to.be.ok();
            expect(trie.contains('food')).to.be.ok();
            expect(trie.contains('bar')).to.be.ok();
        });
        this.emitter.emit('word', 'foo');
        this.emitter.emit('word', 'bar');
        this.emitter.emit('word', 'food');
        this.emitter.emit('end');
    });
});