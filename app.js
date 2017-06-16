'use strict';
//---------Requires---------
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');


var app = express();

//--------------------Template-------------------------------
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//-----------------------Middleware--------------------------

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


//--------------------------Routes----------------------------

var cartRoutes = require('./routes/cart.routes');

app.use(cartRoutes);


//--------------------------------------------------------------------------------
module.exports = app;
