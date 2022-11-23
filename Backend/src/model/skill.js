const { DataTypes } = require('sequelize')
const db = require('../db/config')

const skillModel = db.define('skill',{
    skill: {
        type:DataTypes.STRING,
        allowNull:false
    },
    level: {
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = {skillModel}