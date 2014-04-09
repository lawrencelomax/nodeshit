module.exports = function(port) {
	var haml = require('haml');
	
    function handleIndex(request, response) {
    	
    }

    function handleTrieBuild(request, response) {
        if(filename) {
            console.log('Using file ' + filename);

            var builder = require('./trie_filebuilder.js');
            builder.exports(filename, function(trie){
                console.log('The trie is ' + trie);
            });
        } else {
            throw { name: 'FooError', message: 'No File Provided' };
        }
    }

    var http = require('http');
    var server = null;

    return {
      start: function() {
          if(server) {
              server = http.createServer(function(request, response){
                  var url = require('url').parse('/status?name=ryan', true);
                  if(url.pathname == 'dictionary') {
                	  handleIndex(request, response);
                  }
              }).listen(80);
          }
      },
      stop: function() {
          if(server) {
              server.stop();
              server = null;
          }
      }
    };
};

