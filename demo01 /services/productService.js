const Product = require('../models/product.model.js')

const productCreateService = (req) => {
    return Product.create(req.body)
}

const productFindByIdService = (req) => {
    const { id } = req.params
    return Product.findById(id)
}

const productFindAllService = () => {
    return Product.find({})
}

const findByIdAndUpdateService = (req) => {
    const { id } = req.params
    return Product.findByIdAndUpdate(id, req.body)
}

const productUpdateByIdService = (req) => {
    const { id } = req.params
    return Product.findById(id)
}

const findByIdAndDeleteService = (req) => {
    const { id } = req.params
    return Product.findByIdAndDelete(id)
}

module.exports = {
    productCreateService,
    productFindByIdService,
    productFindAllService,
    findByIdAndUpdateService,
    productUpdateByIdService,
    findByIdAndDeleteService
}