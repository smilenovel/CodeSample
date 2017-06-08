'use strict'

let port = 8100;
let host = "localhost";
let express = require('express');
let http  = require('http');
let app = express();
var multer  = require('multer')
//save file to uploads folder
var upload = multer()

//use ./public folder as static file folder
app.use(express.static(__dirname+"/public"));
app.post('/post', upload.array(), function(req, res, next) {
	res.send(req.body);
});

var server = http.createServer(app).listen(port, function() {
	console.log("server start on http://localhost:"+port);
});