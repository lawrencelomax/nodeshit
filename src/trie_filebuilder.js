module.exports = function(filename, callback) {
	var fs = require('fs');
	var readline = require('readline');
	var rd = readline.createInterface({
		input: fs.createReadStream(filename),
		output: process.stdout,
		terminal: false
	});
	
	var EventEmitter = require('events');
	var emitter = new EventEmitter.EventEmitter();
	console.log(emitter);
		
	var builder = require('./triebuilder.js')
	builder(emitter, function(trie){
		callback(trie);
	});
	
	rd.on('line', function(line) {
		emitter.emit('word', line);
		console.log(line);
	}).on('close', function(foo) {
		emitter.emit('end');
	});
};