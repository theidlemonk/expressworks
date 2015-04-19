var express = require('express'),
    crypto = require('crypto'),
    port = process.argv[2]

var app = express();

app.put('/message/:id', function(req,res) {
  res.send(
    crypto.createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex')
  )
}).listen(port);
