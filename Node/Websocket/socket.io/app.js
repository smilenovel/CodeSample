'use strict'

var express = require('express');
var app = express();
app.use(express.static(__dirname));
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8100);


io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
	setTimeout(function(){
  		socket.emit('news', { hello: 'world' });
	}, 5000);
  });
});
      