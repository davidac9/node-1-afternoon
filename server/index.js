const express = require('express')
const app = express()
const products = require('../products')
const port = 4001
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

// function getProducts(req, res, next) {
//     res.status(200).send(products)
// }

app.get('/api/products', getProducts)

app.get('/api/product/:id', getProduct)


app.listen(port, () => console.log(`listening on port ${port}`))