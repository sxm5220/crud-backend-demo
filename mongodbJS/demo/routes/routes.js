const express = require('express')
const router = express.Router()

const hospital_controller = require('../controllers/dnsys_hospital_controller')
const user_controller = require('../controllers/dnsys_user_controller')

router.post('/hospital/post',hospital_controller.post)
router.get('/hospital/getAll',hospital_controller.getAll)
router.get('/hospital/getOne/:id',hospital_controller.getById)
router.patch('/hospital/update/:id',hospital_controller.patch)
router.delete('/hospital/delete/:id',hospital_controller.delete)

router.post('/user/post',user_controller.post)
router.get('/user/getAll',user_controller.getAll)
router.get('/user/getOne/:id',user_controller.getById)
router.patch('/user/update/:id',user_controller.patch)
router.delete('/user/delete/:id',user_controller.delete)

module.exports = router