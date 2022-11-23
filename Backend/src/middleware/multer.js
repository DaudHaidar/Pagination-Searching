const multer = require('multer')
const path = require('path')
const filePath = '../../assets/images'

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.resolve(__dirname,filePath))
    },
    filename:(req,file,cb)=>{
        cb(null,Math.floor(Math.random()*999999999)+"-"+file.originalname)
    }
})

const fileFilter = (req,file,cb)=>{
    if(file.mimetype==='image/jpg'||file.mimetype==='image/jpeg'||file.mimetype==='image/png'){
        cb(null,true)
    }else{
        cb({message:'file not supported'},false)
    }
}


const midlewareMulter = multer({storage:storage,limits:{fileSize:3000000000000},fileFilter})
module.exports = {midlewareMulter}

























