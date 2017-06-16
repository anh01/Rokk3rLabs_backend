'use strict';

var mongoose = require('mongoose');
/*
 Schema permite crear los objetos que se van a almacenar en la base de datos. Es similar a un constructor
 */
var Schema = mongoose.Schema;

var ProductSchema = Schema({
    name: String,
    price: Number,
    stock: Number
});

module.exports = mongoose.model('product', ProductSchema);