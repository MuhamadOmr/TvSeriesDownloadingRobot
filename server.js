require('./db/mongoose');
var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");
var hbs = require('hbs');
var app = express();
var routes = require("./routes/shows").router;

app.set('view engine', 'hbs');
app.set('views',  'views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json());



app.use('/', routes);



// Get Homepage
app.get('/' , function(req, res){
    res.redirect('/login');
});

// Get Homepage
app.get('*' , function(req, res){
    res.send('where are you going!');
});

app.listen(3000, function() {
    console.log("Express running on port 3000");
});