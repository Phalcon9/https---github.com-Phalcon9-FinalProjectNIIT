const Product = require('../models/productModel')
const multer = require('multer')
const mongoose = require('mongoose')


// get all products
const allProducts = async (req, res) => {
    const products = await Product.find({}).sort({ createdAt: -1 })

    res.status(200).json(products)
}

// get single product
const getProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Product not found' })
    }

    const product = await Product.findById(id)

    if (!product) {
        return res.status(404).json({ error: 'Product not found' })
    }
    console.log("ccc"); 
    res.status(200).json(product)
}
// const Storage = multer.diskStorage({
//     destination: "uploads",
//     filename: (req, file, cb) => {
//         cb(null, file.originalname)
//     }
// })
// const upload = multer({
//     storage: Storage 
// }).single('testImage')

//create new product
const addProduct = async (req, res) => {
    // upload(req, res, (err) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         const newProduct = new Product({ 
    //             name,
    //             discount,
    //             cover:{           
    //                 data:req.file.filename, 
    //                 contentType:'image/png'
    //             }
    //         })
    //         newProduct.save().then(()=> res.send('uploaded'))
    //         
    //     } 
    // })     
            
const { name, discount, cover, price } = req.body
    // add document to DB
    try {
        const product = await Product.create({ name, discount, cover, price })
       
        res.status(200).json(product) 
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}
// delete product
const deleteProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Product not found' })
    }

    const product = await Product.findOneAndDelete({ _id: id })
    if (!product) {
        return res.status(404).json({ error: 'Product not found' })
    }

    res.status(200).json(product)
}

// update procduct
const updateProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Product not found' })
    }

    const product = await Product.findOneAndUpdate({ _id: id }, { ...req.body })
    if (!product) {
        return res.status(404).json({ error: 'product not found' })
    }
    res.status(200).json(product)
}

module.exports = {
    allProducts,
    getProduct,
    addProduct,
    deleteProduct,
    updateProduct
}