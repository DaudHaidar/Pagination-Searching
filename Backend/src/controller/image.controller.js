const { profileModel } = require("../model/profile")
const { create } = require("../service/image.service")

const update = async(req,res)=>{
    try {
        const result = await create(req)
        res.status(200).json({data:result})
    } catch (error) {
        console.log(error)
        res.status(400).json({msg:error})
    }
}

const index = async(req,res)=>{
    try {
        const result = await profileModel.findOne({where:{profileCode:req.params.id}})
        res.status(200).json({data:result.image})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}

const del = async(req,res)=>{
    try {
        const result = await profileModel.destroy({where:{profileCode:req.params.id}})
        res.status(200).json({profilCode:req.params.id})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}
module.exports = {update,index,del}