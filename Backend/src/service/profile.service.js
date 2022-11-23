const { profileModel } = require("../model/sync")
const { response } =require( "../utils/response")
const {Sequelize, Op} = require('sequelize')

const create = async(req) =>{
    try {

        if(!req.body.wantedJobTitte ||!req.body.firstName ||!req.body.lastName) return response(400,'data tidak boleh kosong')

        const result = await profileModel.create({
            profileCode:req.body.profileCode,
            wantedJobTitte:req.body.wantedJobTitte,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            country:req.body.country,
            city:req.body.city,
            address:req.body.address,
            postalCode:req.body.postalCode,
            drivingLicense:req.body.drivingLicense,
            nationality:req.body.nationality,
            placeOfBirth:req.body.placeOfBirth,
            dateOfBirth:req.body.dateOfBirth,
        })


        return response(200,result)
    } catch (error) {
        response(400,'invalid data, mohon dicek ulang')
        throw error
    }
   
}

const get = async(req)=>{
    try {

        const search = req.query.search_query || ""
        const page = parseInt(req.query.page)||1    
        const limit = parseInt(req.query.limit)||5

        console.log(isNaN(page))

        if(isNaN(page)||isNaN(limit)){
            throw 'page harus berupa angka'
        }


        const offset= limit*(page-1 )
        console.log(offset)
        const totalRows = await profileModel.count({where:{
            [Op.or]:[
                {firstName:{
                    [Op.iLike]:'%'+search+'%'}
                },
                {lastName:{
                    [Op.iLike]:'%'+search+'%'}
                },
                {address:{
                    [Op.iLike]:'%'+search+'%'}
                },{wantedJobTitte:{[Op.iLike]:'%'+search+'%'}}

            ]
        }
    })
    console.log(totalRows)

    const totalPages = Math.ceil(totalRows/limit)
    console.log(totalPages)
        

        const result = await profileModel.findAll({
        
        where:{
            [Op.or]:[{firstName:{
                [Op.iLike]:'%'+search+'%'
            }},{lastName:{
                [Op.iLike]:'%'+search+'%'
            }},{address:{
                [Op.iLike]:'%'+search+'%'
            }},{wantedJobTitte:
                {[Op.iLike]:'%'+search+'%'
            }}]
        },
        order:[['profileCode','asc']],
        offset:offset,
        limit:limit,
    })

    console.log('result service',result)
        return {
            result:result,
            limit:limit,
            page:page,
            totalRows:totalRows,
            totalPages:totalPages
        }
    } catch (error) {
        throw  error
    }

}

const updateData = async(req)=>{
    try {
        const result = await profileModel.update({
            wantedJobTitte:req.body.wantedJobTitte,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            country:req.body.country,
            city:req.body.city,
            address:req.body.address,
            postalCode:req.body.postalCode,
            drivingLicense:req.body.drivingLicense,
            nationality:req.body.nationality,
            placeOfBirth:req.body.placeOfBirth,
            dateOfBirth:req.body.dateOfBirth,
        },{where:
            {profileCode:req.params.id}})
        
        return result
    } catch (error) {
        throw  error
    }
    
}

const remove = async(req)=>{
    try {
        const result = await profileModel.destroy({
            where:
                {profileCode:req.params.id}})
    
        return result
    } catch (error) {
        throw error
    }
    
}

module.exports={create,get, updateData,remove}