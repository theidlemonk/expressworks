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
app.use(stylus.middleware(process.argv[3]));
// app.use('/main.css', express.static(process.argv[3] + '/main.css'));
app.use(express.static(process.argv[3]));

// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.listen(process.argv[2]);
