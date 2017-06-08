'use strict'

let port = 8100;
let host = "localhost";
let express = require('express');
let http  = require('http');
let app = express();
let bodyParser = require('body-parser');
//use ./public folder as static file folder
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.post("/post", function(req, res, next){
	//post parameters is req.body
	res.send(req.body);
});
var server = http.createServer(app).listen(port, function() {
	console.log("server start on http://localhost:"+port);
});
