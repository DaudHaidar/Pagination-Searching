const { DataTypes, DATEONLY } = require('sequelize')
const db = require('../db/config')

const profileModel = db.define('profile',{
    profileCode:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    wantedJobTitte:{
        type:DataTypes.STRING,
        allowNull:false
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    country:{
        type:DataTypes.STRING,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    postalCode:{
        type:DataTypes.STRING,
        allowNull:false
    },
    drivingLicense:{
        type:DataTypes.BIGINT,
        allowNull:false,
        unique:true
    },
    nationality:{
        type:DataTypes.STRING,
        allowNull:false
    },
    placeOfBirth:{
        type:DataTypes.STRING,
        allowNull:false
    },
    dateOfBirth:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING
    }
    
},{freezeTableName:true})

module.exports= {profileModel}