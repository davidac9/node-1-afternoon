const products = require('../products')

const getProduct = ((req, res, next) => {
    const {id} = req.params
    const product = products.filter(product => product.id === +id) [0]
    res.status(200).send(product)
})

module.exports = getProduct