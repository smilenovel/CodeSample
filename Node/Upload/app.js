'use strict'

let port = 8100;
let host = "localhost";
let express = require('express');
let http  = require('http');
let app = express();
var multer  = require('multer')
//save file to uploads folder
var upload = multer({ dest: 'uploads/' })

//use ./public folder as static file folder
app.use(express.static(__dirname+"/public"));
app.post('/upload', upload.single('file'), function(req, res, next) {
	/*file object structure 
	{
	  "fieldname": "file",
	  "originalname": "filename.xxx",
	  "encoding": "7bit",
	  "mimetype": "application/javascript",
	  "destination": "uploads/",
	  "filename": "bd0ba0dcadb91a474f2fe565874e884a",
	  "path": "uploads\\bd0ba0dcadb91a474f2fe565874e884a",
	  "size": 9547
	}
	*/
	res.send(req.file);
});


var server = http.createServer(app).listen(port, function() {
	console.log("server start on http://localhost:"+port);
});