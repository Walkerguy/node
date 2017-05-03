var http = require('http');
var express = require('express');

var app = express();
var routes = express.Router();

var exampleObject = {
	greeting: "Hello world!",
	farewell: "Goodbye world..."
}

app.get('/', function(request, response) {
	response.contentType('application/json');
	response.json(exampleObject);
})

app.get('/about', function(request, response) {
	response.send('Written by Bram.');
})

app.post('/', function(request, response) {
	response.send('Hello Avans, POST request received!');
})

app.put('/', function(request, response) {
	response.send('Hello Avans, PUT request received!');
})

app.all('*', function(request, response) {
	response.status(404);
	response.send('404 - Not found');
})



// Starter message.
app.listen(3000, function() {
	console.log('Server app is listening on port 3000');
})