const express = require('express');

const ProductController = require('./controllers/ProductController')

const routes = express.Router();

routes.get('/', (req, res, next)=> {
    return res.json({ hello: 'World'})
})

routes.get('/products', ProductController.index)

routes.get('/products/:id', ProductController.getOne)

routes.post('/products', ProductController.store)

routes.patch('/products/:id', ProductController.attSore)

routes.delete('/products/:id', ProductController.deleteOne)


module.exports = routes;