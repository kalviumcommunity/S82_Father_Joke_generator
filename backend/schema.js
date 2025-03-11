const mongoose = require('mongoose')

const objectschema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String},
    dob:{type:Number},
    address:{type:Number},
    message:{type:String},
    fatherName:{type:String},
    motherName:{type:String},
    siblingName:{type:Number},
    date:{type:Date}
})

module.exports = mongoose.model('objects',objectschema)