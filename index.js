//-----Requires------
var mongoose = require('mongoose');
//Promise engine for mongoose
mongoose.Promise = require('bluebird');
var app = require('./app');


//------Port settings
var port = process.env.PORT || 3366;


//-------Database initialization-----------
mongoose.connect('mongodb://localhost:27017/shopping-cart', (err, response) => {
    if (err) {
        throw err;
    } else {
        console.log("DB connection succesful");
        app.listen(port, function () {
            console.log(`Shopping cart listening in http://localhost:${port}`);
        });
    }
});