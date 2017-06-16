'use strict'
var http = require('http');
var httpProxy = require('http-proxy');
// Error example 
// 
// Http Proxy Server with bad target 
// 
var proxy = httpProxy.createServer({
  target:'http://zhbfy-prod.apigee.net',
  ws: true
});

proxy.listen(8200);
 
// 
// Listen for the `error` event on `proxy`. 
proxy.on('error', function (err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
 
  res.end('Something went wrong. And we are reporting a custom error message.');
});
 
// 
// Listen for the `proxyRes` event on `proxy`. 
// 
proxy.on('proxyRes', function (proxyRes, req, res) {
  console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
});
 
// 
// Create your target server 
// 
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied to: ' + req.url + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(8100);