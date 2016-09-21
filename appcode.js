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

var express = require('express');
var app = express();
var pg = require('pg');
app.engine('html', require('jsrender').__express);
app.set('view engine', 'html');
pg.defaults.ssl = true;
app.get('/db', function (request, response) {
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');
  client
    .query('SELECT * FROM test_table;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});
});
/*
app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});
*/
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
