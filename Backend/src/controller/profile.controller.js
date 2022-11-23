const { create,get, updateData,remove } = require('../service/profile.service')

const post = async(req,res)=>{
    try {
        const result = await create(req)
        console.log(result)
        res.status(result.status).json({data:result.msg})
    } catch (error) {
        console.log(error)
        res.status(400).json({msg:error})
    }
}

const index = async(req,res)=>{
    try {
        const hasil = await get(req)
        console.log(hasil)
        res.status(200).json({data:hasil.result, page: hasil.page, totalRows: hasil.totalRows, limit: hasil.limit, totalPages:hasil.totalPages})
    } catch (error) {
        console.log(error)
        res.status(400).json({msg:error})
    }
}

const update = async(req,res)=>{
    try {
        const result = await updateData(req)
        res.status(200).json({data:result})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}

const del = async(req,res)=>{
    try {
        const result = await remove(req)
        res.status(200).json({data:result})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}

module.exports = {post,index,update,del}