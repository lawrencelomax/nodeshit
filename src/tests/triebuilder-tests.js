var triebuilder = require('../triebuilder.js')
var EventEmitter = require('events');
var expect = require('expect.js');

describe("the trie builder", function(){
    var emitter;
    beforeEach(function(){
       emitter = new EventEmitter.EventEmitter();
    });

    it("should accept a word", function(){
        triebuilder(emitter, function(trie){
            expect(trie.contains('foo')).to.be.ok();
            expect(trie.contains('food')).to.not.be.ok();
            expect(trie.contains('bar')).to.not.be.ok();
        });
        emitter.emit('word', 'foo');
        emitter.emit('end');
    });

    it("should accept a moar words", function(){
        triebuilder(emitter, function(trie){
            expect(trie.contains('foo')).to.be.ok();
            expect(trie.contains('food')).to.not.be.ok();
            expect(trie.contains('bar')).to.be.ok();
        });
        emitter.emit('word', 'foo');
        emitter.emit('word', 'bar');
        emitter.emit('end');
    });

    it("should accept the most words", function(){
        triebuilder(emitter, function(trie){
            expect(trie.contains('foo')).to.be.ok();
            expect(trie.contains('food')).to.be.ok();
            expect(trie.contains('bar')).to.be.ok();
        });
        emitter.emit('word', 'foo');
        emitter.emit('word', 'bar');
        emitter.emit('word', 'food');
        emitter.emit('end');
    });
});