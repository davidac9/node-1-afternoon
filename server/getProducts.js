const products = require('../products')

const getProducts = ((req, res, next) => {
    if (req.query.price){
        const items = products.filter(val => val.price >= parseInt(req.query.price)) [0]
        res.status(200).send(items)
 }
 {res.status(200).send(products)}
})

module.exports = getProducts