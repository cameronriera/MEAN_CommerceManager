const mongoose = require('mongoose'), 
products = require('../controllers/tasks');

module.exports = (app) => {
    app.get('/products', products.index);
    app.get('/products/:id', products.read);    
    app.post('/products', products.create);
    app.put('/products/edit/:id', products.update);
    app.delete('/products/:id', products.delete);
}