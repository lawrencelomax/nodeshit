triebuilder = require('../triebuilder.js')

exports.test_builder = function(test) {
	var EventEmitter = require('events');
	
	var emitter = new EventEmitter.EventEmitter();
	triebuilder(emitter, function(trie){
		test.equals(trie.contains('foo'), true);
		test.equals(trie.contains('food'), false);
		test.equals(trie.contains('bar'), false);
	});
	emitter.emit('word', 'foo');
	emitter.emit('end');
	
	emitter = new EventEmitter.EventEmitter();
	triebuilder(emitter, function(trie){
		test.equals(trie.contains('foo'), true);
		test.equals(trie.contains('food'), false);
		test.equals(trie.contains('bar'), true);
	});	
	emitter.emit('word', 'foo');
	emitter.emit('word', 'bar');
	emitter.emit('end');

	emitter = new EventEmitter.EventEmitter();
	triebuilder(emitter, function(trie){
		test.equals(trie.contains('foo'), true);
		test.equals(trie.contains('food'), true);
		test.equals(trie.contains('bar'), true);
	});	
	emitter.emit('word', 'foo');
	emitter.emit('word', 'bar');
	emitter.emit('word', 'food');
	emitter.emit('end');
	
	test.done();
};