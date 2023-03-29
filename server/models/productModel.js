const mongoose = require('mongoose')

const Schema = mongoose.Schema



const productSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand:{
        type:String,
        required: true
    },
    quantity:{
        type: Number
    },
    subCategory:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
        required: true
    }

}, { timestamps: true })

productSchema.statics.addProducts = async function (name) {
    const exists = await this.findOne({ name })

    if (exists) {
        throw Error('Name Exists')
    }

    // const product = await Product.create({ name, discount, cover, price, category })

    // return product
}
module.exports = mongoose.model('Product', productSchema)
