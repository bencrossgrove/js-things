var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = 3000;

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// view engine ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static path
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', function(req, res){
    res.render('index', {
        title: 'Generate Text'
    });
});

app.listen(port, function(){
    console.log("Server started on port 3000");
});