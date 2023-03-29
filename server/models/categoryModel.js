const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const {Products} = require('./productModel')


const categorySchema = new Schema({
    productCategory:{
        type: String,
        require:true,
        unique: true
    },
    icon:{
        type: String,
        require: true
    },
    subCategory:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory'
    }]
    // product:[
    // {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Product'
        
    // }]
   
}, {timestamps: true }) 
 
module.exports = mongoose.model('Category', categorySchema)
// module.exports = mongoose.model('Product', productSchema)
// module.exports= {categorySchema}