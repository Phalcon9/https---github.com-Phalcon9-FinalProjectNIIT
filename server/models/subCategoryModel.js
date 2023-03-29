const mongoose = require("mongoose");
const Schema = mongoose.Schema

const subCategorySchema = new Schema({
    innerCategory:{
        type: String,
        require:true,
        unique: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category'
    }, 
    product:[
    { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
        
    }]
   
}, {timestamps: true }) 

module.exports = mongoose.model('SubCategory', subCategorySchema) 