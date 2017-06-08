'use strict'

let port = 8100;
let host = "localhost";
let express = require('express');
let http  = require('http');
let app = express();
let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();
//use ./public folder as static file folder
app.use(express.static(__dirname+"/public"));

var server = http.createServer(app).listen(port, function() {
	console.log("server start on http://localhost:"+port);
});
