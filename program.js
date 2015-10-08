var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.set('views', process.argv[3]);
app.set('stylesheets', process.argv[3]);

app.get('/home', function(req, res) {
    // res.send('Hello World!');
    res.render('index', {
        date: new Date().toDateString()
    });
});

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({
    extended: false
}));

app.post('/form', function(req, res) {
    res.end(req.body.str.split('').reverse().join(''));
});

var stylus = require('stylus');
// app.use(stylus.middleware(process.argv[3]));
// app.use('/main.css', express.static(process.argv[3] + '/main.css'));
// app.use(express.static(process.argv[3]));

app.put('/message/:id', function(req, res) {
    var newId = require('crypto').createHash('sha1')
        .update(new Date().toDateString() + req.params.id)
        .digest('hex')
    res.end(newId);
});

app.get('/search', function(req, res) {
    res.send(req.query);
});

app.get('/books', function(req, res) {
    var file = process.argv[3]
    require('fs').readFile(file, function(err, data) {
        if (err) {
            res.sendStatus(500)
        };
        res.send(JSON.parse(data));
    });
});

// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.listen(process.argv[2]);
