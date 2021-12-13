const dbConn = require("../config/mongo.config")
const mongoose = require('mongoose')

var PhoneSchema = new mongoose.Schema ({
    phone:String,
    date: String,

})

module.exports = mongoose.model('phones', PhoneSchema)