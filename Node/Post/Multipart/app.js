'use strict'

let port = 8100;
let host = "localhost";
let express = require('express');
let http  = require('http');
let app = express();
var multer  = require('multer')
//save file to uploads folder
var upload = multer()
var storage = multer.diskStorage({
    //destination is a alternative way to set the destination folder
    dest: 'uploads/',
    /*    
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },*/
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
var upload = multer({ storage: storage })


//upload also support memory storage way
/*
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })
*/

//use ./public folder as static file folder
app.use(express.static(__dirname+"/public"));
//post plain text data
app.post('/post', upload.array(), function(req, res, next) {
    res.send(req.body);
});

//upload one file
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
    res.send(req.body);
})

//upload one series of files
app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files 
  // req.body will contain the text fields, if there were any 
    res.send(req.body);
})

//upload multiple series of files
var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files 
  // 
  // e.g. 
  //  req.files['avatar'][0] -> File 
  //  req.files['gallery'] -> Array 
  // 
  // req.body will contain the text fields, if there were any 
    res.send(req.body);
})

var server = http.createServer(app).listen(port, function() {
    console.log("server start on http://localhost:"+port);
});