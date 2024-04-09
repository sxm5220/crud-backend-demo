const productService = require('../services/productService.js')

/**
 * 添加数据
 */
const productCreate = async (req, res) => {
    try {
        const products = await productService.productCreateService(req)
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

/**
 * 根据ID查找获取
 */
const productFindById = async (req, res) => {
    try {
        const products = await productService.productFindByIdService(req)
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

/**
 * 查找获取所有的数据
 */
const productFindAll = async (req, res) => {
    try {
        const products = await productService.productFindAllService()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

/**
 * 更改
 */
const productUpdateById = async (req, res) => {
    try {
        const product = await productService.findByIdAndUpdateService(req)
        //修改的项没有找到
        if (!product) return res.status(404).json({ message: "Product not found" })
        //修改成功后查询出来
        const updatedProduct = await productService.productUpdateByIdService(req)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

/**
 * 删除
 */
const productDeleteById = async (req, res) => {
    try {
        const product = await productService.findByIdAndDeleteService(req)
        //删除的项没有找到
        if (!product) return res.status(404).json({ message: "Product not found" })
        res.status(200).json({ message: "Product deleted successfully." })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    productCreate,
    productFindById,
    productFindAll,
    productUpdateById,
    productDeleteById
}