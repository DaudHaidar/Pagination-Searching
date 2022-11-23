const { DataTypes } = require("sequelize")
const db = require("../db/config")

const experienceModel = db.define('experienceModel',{
    workingExperience:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = {experienceModel}