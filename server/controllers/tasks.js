let Product = require('../models/models')

module.exports = {
    index: (req, res) => {
        Product.find({}, (err, products) => {
            if (err) {
                console.log(error);
                res.status(400).json({message : "Error", err : err.errors});
            } else {
                console.log(products);
                res.json(products);
            };
        }).sort({type:1}); 
    },

    read: (req, res) => {
        Product.findOne({ _id : req.params.id }, (err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json({message : "Error", err : err.errors});
            } else {
                console.log(products);
                res.json(products);
            };
        });
    },

    create: (req, res) => {
        console.log("POST DATA : ", req.body);
        var product = new Product({
            name: req.body.name, 
            quantity: req.body.quantity, 
            price: req.body.price
        });
        product.save((err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json({message : "Error", err : err.errors});
            } else {
                console.log("Successfully saved data!");
                res.json(products);
            };
        }); 
    },

    update: (req, res) => {
        console.log("POST DATA :", req.body);
        Product.update({ _id : req.params.id }, {
            name: req.body.name, 
            quantity: req.body.quantity, 
            price: req.body.price
        }, (err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors);
            } else {
                console.log("Successfully updated data!");
                res.json(products);
            }
        });
    },

    delete: (req, res) => {
        Product.remove({ _id : req.params.id }, (err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json({message : "Error", err : err.errors});
            } else {
                console.log("Successfully removed from database");
                res.json(products);
            };
        });
    },


}