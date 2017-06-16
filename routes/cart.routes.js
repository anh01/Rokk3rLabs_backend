'use strict';
//----------------Requires--------------------
var express = require('express');
var cartCtrl = require('../controllers/cart.controller');


var routes = express.Router();

//--------------Routes-----------------
routes.get("/", cartCtrl.controller.main);
routes.get("/add-item/:id/:price", cartCtrl.controller.addItem);
routes.get("/delete-item/:id", cartCtrl.controller.deleteItem);
routes.get("/shopping-cart", cartCtrl.controller.shoppingCart)

//-------------------------------------

module.exports = routes;