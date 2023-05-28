const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genderSchema = new Schema({
    gender:{
        type: String,
    unique: true,
    required: true,
    },
    product:[
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product' 
        }],

}, {timestamps: true })

module.exports = mongoose.model('Gender', genderSchema)