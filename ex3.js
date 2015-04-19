var express = require('express'),
    port = process.argv[2],
    path = process.argv[3]

var app = express();

app.set('views', path)
app.set('view engine', 'jade')

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
}).listen(port);
