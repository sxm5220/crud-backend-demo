const express = require('express')
const router = express.Router()
const productHander = require('../router_handler/productHander.js')

//添加数据
router.post('/',productHander.productCreate)

//根据ID查找获取
router.get('/:id',productHander.productFindById)

//查找获取所有的数据
router.get('/',productHander.productFindAll)

//更改
router.put('/:id',productHander.productUpdateById)

//删除
router.delete('/:id',productHander.productDeleteById)

module.exports = router