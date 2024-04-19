const asyncHandler = require('express-async-handler')
const Model = require('../models/dnsys_hospital_model')

//get all
//@api {method} path  [title] 
//      method	必填   请求类型:DELETE, GET, POST, PUT, ...更多
//      path    必填   请求路径
//      title   不必填  接口标题

/**
 * @api {get} /api/hospital/getAll 查询医院(所有)
 * @apiGroup Hospital
 * 
 * @apiName GetAllHospital
 * 
 */
exports.getAll = asyncHandler(async (req,res,next)=>{
    try {
        const data = await Model.find({});
        console.log(`data=>${data}`)
        res.json({
            code: 0,
            message: "success",
            data:data
        })
    } catch (error) {
        res.status(500).json({
            code: -1,
            message: "fail"
        })
    }
})

//get by id
/**
 * @api {get} /api/hospital/getOne 查询医院(单个)
 * @apiGroup Hospital
 * 
 * @apiParam {String} id 查询ID
 * @apiParamExample {json} Request-Example
 * {
 *  "id":"64672f4502f095cf1eb9eebc"
 * }
 * 
 * @apiSuccessExample  {json} Response-Example
 * {
 *  "code":"200",
 *  "result":"success"
 * }
 * 
 */
exports.getById = asyncHandler(async (req,res,next)=>{
    try {
        const data = await Model.findById(req.params.id)
        res.json({
            code: 0,
            message: "success",
            data:data
        })
    } catch (error) {
        res.status(500).json({
            code: -1,
            message: "fail"
        })
    }
})

//post
/**
 * @api {post} /api/hospital/post 添加医院
 * @apiGroup Hospital
 * 
 * @apiParam {Array} id 查询ID
 * @apiParamExample {json} Request
 * [{
 *   "name": "北京医院",
 *   "clinical_topic": [
 *       {
 *           "topic_id": 1,
 *           "topic_name": "儿科课题A"
 *       },
 *       {
 *           "topic_id": 2,
 *           "topic_name": "心脑血管课题B"
 *       }
 *   ]
 * }]
 * 
 * @apiSuccessExample  {json} Response
 * {
 *  "code":"200",
 *  "result":"success"
 * }
 * 
 * 
 */
exports.post = asyncHandler(async (req,res,next)=>{
    for await (const doc of req.body) {
        const data = new Model({
                name:doc.name,
                clinical_topic:doc.clinical_topic})
         await data.save()
    }
    try {
        res.status(200).json({
            code: 0,
            message: "success"
        })
    } catch (error) {
        res.status(400).json({
            code: -1,
            message: "fail"
        })
    }
})

//update by id
exports.patch = asyncHandler(async (req,res,next)=>{
    try {
        const id = req.params.id
        const updateData = req.body
        const options = {new: true}
        const result = await Model.findByIdAndUpdate(id,updateData,options)
        res.send(result).json({
            code: 0,
            message: "success"
        })
    } catch (error) {
        res.status(400).json({
            code: -1,
            message: "fail"
        })
    }
})

//deletes by id
exports.delete = asyncHandler(async (req,res,next)=>{
    try {
        const id = req.params.id
        const result = await Model.findByIdAndDelete(id)
        console.log(`res:${result}`)
        // res.send(result).json({
        //     code: 0,
        //     message: "success"
        // })
        res.status(200).json({
            code: 0,
            message: "success"
        })
        //res.send(`Doucment with ${data.name} has been deleted...`)
    } catch (error) {
        res.status(400).json({
            code: -1,
            message: "fail"
        })
    }
})
