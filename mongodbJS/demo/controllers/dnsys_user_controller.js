const asyncHandler = require('express-async-handler')
const Model = require('../models/dnsys_user_model')

//get all
/**
 * @api {get} /api/user/getAll 用户模块列表
 * @apiGroup User
 * 
 *  @apiName GetAllUser
 */
exports.getAll = asyncHandler(async (req,res,next)=>{
    try {
        const data = await Model.find({});
        console.log(`Data-> ${data}`)
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//get by id
exports.getById = asyncHandler(async (req,res,next)=>{
    try {
        const data = await Model.findById(req.params.id)
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//post
exports.post = asyncHandler(async (req,res,next)=>{
    let modelArray = [];
    for await (const doc of req.body) {
        const data = new Model({nickname:doc.nickname,phone:doc.phone,photo:doc.photo,email:doc.email})
        const dataToSave = await data.save()
        modelArray.push(dataToSave)
    }
     
    try {
        // const dataToSave = await modelArray.save()
        console.log(`Data=>${modelArray}`)
        res.status(200).json(modelArray)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

//update by id
exports.patch = asyncHandler(async (req,res,next)=>{
    try {
        const id = req.params.id
        const updateData = req.body
        const options = {new: true}
        const result = await Model.findByIdAndUpdate(id,updateData,options)
        res.send(result)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

//deletes by id
exports.delete = asyncHandler(async (req,res,next)=>{
    try {
        const id = req.params.id
        const data = await Model.findByIdAndDelete(id)
        res.send(`Doucment with ${data.name} has been deleted...`)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
