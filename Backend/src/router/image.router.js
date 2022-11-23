const express= require('express')
const router = express.Router()
const {midlewareMulter}= require('../middleware/multer')
const {index,update,del} =require('../controller/image.controller')

router.put('/:id',midlewareMulter.single('img'),update)
router.get('/:id',index)
router.delete('/:id',del)
module.exports = router