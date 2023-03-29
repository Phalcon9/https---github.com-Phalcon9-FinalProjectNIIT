const Product = require('../models/productModel')

const mongoose = require('mongoose')
const Category = require('../models/categoryModel')
const SubCategory = require('../models/subCategoryModel')
const multer = require('multer')
const { request } = require('express')
// const upload = multer({ dest: 'uploads/' })



// get all products
const allProducts = async (req, res) => {
    const products = await Product.find({})
    // const 
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


//create new product
const addProduct = async (req, res) => {
    console.log(req.body);
    const { name, discount, price, subCategory, brand, quantity, discription } = req.body
    // console.log(category);
    const cover = req.file.path  
    try {
        const product = await  Product.create({ name, discount, cover, price, subCategory, brand, quantity, discription })
        product.save().then((product) => {
            SubCategory.findByIdAndUpdate(subCategory, {
              $push: { product: product }      
            }).then(() => console.log('Product added to category'));
        
          });  
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