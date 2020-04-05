var express = require('express');
var server = express();

server.get('/', function(request, response) {
 response.sendfile('./index.html');
});

server.listen(3000);