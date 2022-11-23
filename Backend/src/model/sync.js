const db = require('../db/config')
const {profileModel} = require('./profile')
const {experienceModel} = require('./workingExperience')
const {employementModel} = require('./employement')
const {educationModel} = require('./education')
const {skillModel} = require('./skill')


employementModel.hasMany(experienceModel)
experienceModel.belongsTo(employementModel)

profileModel.hasMany(employementModel)
employementModel.belongsTo(profileModel)

profileModel.hasMany(educationModel)
educationModel.belongsTo(profileModel)

profileModel.hasMany(skillModel)
skillModel.belongsTo(profileModel)

db.sync({alter:true})
module.exports={profileModel,experienceModel,employementModel,educationModel}


