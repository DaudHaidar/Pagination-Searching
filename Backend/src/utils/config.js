const path = require('path')
const dotenv= require('dotenv').config({path:path.resolve(__dirname, '../../.env')})

const config = {
    PORT:process.env.PORT,
    PASSWORD:process.env.PASSWORD,
    USERNAME:process.env.USRNM,
    DATABASE:process.env.DB
}
module.exports={config}