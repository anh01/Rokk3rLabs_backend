/**
 * Created by juanospina on 16/06/17.
 */
/**
 * Created by juanospina on 26/04/17.
 */
'use strict';


var controller = {};

var Product = require('../models/product.model');
var Cart = require('../models/cart.model');

controller.main = function (request, response) {

    Cart.findOne().populate('items').exec((err, data) => {
        if (!err) {
            var totalPrice = 0;
            var totalItems = 0;
            if (data != null && data != {}) {
                var items = data.items;
                totalItems = items.length;
                for (var i = 0; i < totalItems; i++) {
                    totalPrice += items[i].price;
                }
            } else {
                var myCart = new Cart();
                myCart.items = [];
                myCart.save((err, data) => {
                    if (!err) {
                        console.log('cart created');
                    } else {
                        console.log('error creating cart');
                    }
                });
            }
            Product.find((err, data) => {
                if (!err) {
                    response.render('home', {
                        products: data,
                        totalPrice: totalPrice,
                        totalItems: totalItems
                    });
                } else {
                    response.render('home', {
                        error: "Can't retrieve products"
                    })
                }
            });

        } else {

        }
    });


}

controller.addItem = function (request, response) {
    var id = request.params.id;
    Cart.findOneAndUpdate(
        {},
        {$push: {items: id}},
        (err, data) => {
            if (!err) {
                Product.findByIdAndUpdate(id,
                    {$inc: {stock: -1}},
                    (err, data) => {
                        if (!err) {
                            console.log(data);
                            response.redirect('/');
                        } else {
                            console.log(err);
                            response.render('error');
                        }
                    }
                );
            } else {
                console.log(err);
                response.render('error');
            }
        }
    );
}

controller.deleteItem = function (request, response) {
    var id = request.params.id;
    Cart.findOneAndUpdate(
        {},
        {$pull: {items: id}},
        (err, data) => {
            if (!err) {
                Product.findByIdAndUpdate(id,
                    {$inc: {stock: 1}},
                    (err, data) => {
                        if (!err) {
                            console.log(data);
                            response.redirect('/shopping-cart');
                        } else {
                            console.log(err);
                            response.render('error');
                        }
                    }
                );
            } else {
                console.log(err);
                response.render('error');
            }
        }
    );
}

controller.shoppingCart = function (request, response) {
    Cart.findOne().populate('items').exec((err, data) => {
        if (!err) {
            response.render('shopping', {
                products: data.items
            });
        } else {
            response.render('error');
        }
    });
}


module.exports = {controller};