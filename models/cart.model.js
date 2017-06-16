'use strict';

var mongoose = require('mongoose');
/*
 Schema permite crear los objetos que se van a almacenar en la base de datos. Es similar a un constructor
 */
var Schema = mongoose.Schema;

var CartSchema = Schema({
    items: [
        {
            type: Schema.ObjectId,
            ref: 'product'
        }
    ]
});

module.exports = mongoose.model('cart', CartSchema);