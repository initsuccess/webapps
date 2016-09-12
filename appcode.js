#!/usr/bin/env nodejs

/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env["PORT"], function (){
console.log('Server running at http://localhost:' + process.env["PORT"]);
});
*/

var express = require('express')
var app = express()


app.get('/', function (req, res) {
  res.send('WebApps are on the way..!!')
});

app.get('/Games', function (req, res) {
  res.send('More Games on the way..!')
}); 

app.get('/Mail', function (req, res) {
  res.send('You can check all your mails here..!')
});

app.get('/SyncPad', function (req, res) {
  res.send('You can write notes and draw pictures here and share it with others..!')
});

app.listen(process.env["PORT"])
