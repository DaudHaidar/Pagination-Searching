const { profileModel } = require("../model/sync")

const create = async(req)=>{
    try {
        const result = await profileModel.update({
            image: req.file ? `upload/${req.file.filename}`:`upload/default.jpeg`
        },{where:{profileCode:req.params.id}})
    
        return result
    } catch (error) {
        throw  error
    }

}


module.exports= {create}
