var express = require('express'),
    port = process.argv[2],
    path = process.argv[3]

var app = express();
app.use(require('stylus').middleware(path));
app.use(express.static(path)).listen(port);

