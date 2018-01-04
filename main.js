var http = require('http') // recupérer une adresse http 
var express = require('express');
var app = express();
var mongo = require('./mongo.js');

//const server = http.createServer((req, res) => {
	//res.statusCode = 200;
	//res.setHeader('Content-Type', 'text/plain');
	//res.end('Hello world');

//}); 

// recupération de la var environnement Clever 
var uri = process.env.MONGODB_ADDON_URI;
var http = require('http').Server(app);

app.get('/hello', function(req, res){
	res.end('Salut tout le monde');
})

mongo.connect(uri, function()}
conso.log("MongoDB connected");
http.listen(8080, () =>{
	console.log("server started");
});
})