const { DataTypes, DATEONLY } = require('sequelize')
const db = require('../db/config')

const employementModel = db.define('employement',{
    jobTitle:{
        type:DataTypes.STRING,
        allowNull:false
    },
    employer:{
        type:DataTypes.STRING,
        allowNull:false
    } ,
    startDate: {
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    endDate:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false
    } ,
    description: {
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = {employementModel}