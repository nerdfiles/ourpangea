'use strict';
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var path = require('path');
var port = process.env['PORT'] || 3000;

server.listen(port);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set('views', path.join(__dirname, 'app'));
app.use(express.static(__dirname + '/app'));

app.get('/', function (req,res) {
  res.render('index');
});

