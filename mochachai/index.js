var http = require('http');
var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send('GET successful.');
})

app.post('/', function(request, response) {
	response.send('POST successful.');
})

app.put('/', function(request, response) {
	response.send('PUT successful.');
})

app.all('*', function(request, response) {
	response.status(404);
	response.send('404 - Not found');
})

// Port & starter message.
var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log('Server app is listening on port ' + port + '.');
})