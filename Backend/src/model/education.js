const { DataTypes } = require('sequelize')
const db = require('../db/config')

const educationModel = db.define('education',{
   
    school: {
        type: DataTypes.STRING,
        allowNull: false
    },
    degree:{
        type: DataTypes.ENUM(['S3','S2','S1','SMA','SLTA','SMP','SLTP','SD','TK']),
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports={educationModel}