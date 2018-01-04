var http = require('http') // recupérer une adresse http 
var express = require('express');
var app = express();

//const server = http.createServer((req, res) => {
	//res.statusCode = 200;
	//res.setHeader('Content-Type', 'text/plain');
	//res.end('Hello world');

//}); 

var http = require('http').Server(app);

app.get('/hello', function(req, res){
	res.end('Salut tout le monde');
})

http.listen(8080, () =>{
	console.log("server started");
})