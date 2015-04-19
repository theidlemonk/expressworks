var express = require('express'),
    port = process.argv[2],
    parser = require('body-parser')

var app = express();

app.use(parser.urlencoded({extended: false}));
app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''));
}).listen(port);
