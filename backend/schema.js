const mongoose = require('mongoose');

const objectSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    dob: { type: Number },  
    address: { type: String }, 
    message: { type: String },
    fatherName: { type: String },
    motherName: { type: String },
    siblingName: { type: String }, 
    date: { type: Date, default: Date.now } 
});

module.exports = mongoose.model('Object', objectSchema);
