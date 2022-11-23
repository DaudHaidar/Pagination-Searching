const {config} = require('./utils/config')
const db = require('../src/db/config')
const express = require('express')
const app = express()
const profileRouter = require('./router/profile.router')
const photoRouter = require('./router/image.router')
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use('/profile',profileRouter)
app.use('/photo',photoRouter)


db.authenticate()
    .then(()=>{
        console.log('Succes connecting database')
    })
    .catch(((err)=>{
        console.log(err)
    }))

    
app.listen(config.PORT,()=>{
    console.log(`Listening server on ${config.PORT}`)
})