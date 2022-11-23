const {Sequelize}=require("sequelize")
const{config}=require('../utils/config')

const db = new Sequelize(config.DATABASE,config.USERNAME,config.PASSWORD,{
    dialect:'postgres',
    host:'localhost',
    logging:false
})


module.exports= db