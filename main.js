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
var dbName = process.env.MONGODB_ADDON_DB;

var http = require('http').Server(app);

app.get('/hello', function(req, res){
	var coll = mongo.collection('users');
	coll.find().toArray(function(err, res2){
		res.end(JSON.stringify(res2));
		return;
	})
});

app.post('/hello', function(req, res){
	var name = req.body.name;
	var coll = mongo.collection('users');
	coll.insert({name:name}, function(err, res){
		if (err){
			console.log(err)
		} else {
			console.log('added user' + name);
		}
	})	

});

mongo.connect(uri, function(){
	console.log("MongoDB connected");
	http.listen(8080, () =>{
		console.log("server started");
	});
});