var express = require('express'),
    fs = require('fs'),
    port = process.argv[2],
    file = process.argv[3]

var app = express();

app.get('/books', function(req,res) {
  fs.readFile(file, 'utf8', function(err,data) {
    if(err) throw err;
    var obj = JSON.parse(data);
    res.send(obj);
  });
}).listen(port);
