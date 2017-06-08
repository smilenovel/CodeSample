'use strict'

let port = 8100;
let host = "localhost";
let express = require('express');
let http  = require('http');
let app = express();
let cors = require('cors');
//use ./public folder as static file folder
app.use(express.static(__dirname+"/public"));
app.options('*', cors());
app.use(cors());

var server = http.createServer(app).listen(port, function() {
	console.log("server start on http://localhost:"+port);
});