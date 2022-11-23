const express= require('express')
const router = express.Router()
const {post,index,update,del} =require('../controller/profile.controller')

router.post('/',post)
router.get('/',index)
router.put('/:id',update)
router.delete('/:id',del)

module.exports = router