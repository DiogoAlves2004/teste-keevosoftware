const express = require('express');

const ProductController = require('./controllers/ProductController')

const routes = express.Router();

routes.get('/', (req, res, next)=> {
    return res.json({ 

        routes : {
            products: "/api/products"
        }

    })
})

routes.get('/api/products', ProductController.index)

routes.get('/api/products/:id', ProductController.getOne)

routes.post('/api/products/', ProductController.store)

routes.patch('/api/products/', ProductController.attSore)

routes.delete('/api/products/:id', ProductController.deleteOne)


module.exports = routes;