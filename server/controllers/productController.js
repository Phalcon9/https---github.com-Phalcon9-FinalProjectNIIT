const Product = require('../models/productModel')

const mongoose = require('mongoose')
const Category = require('../models/categoryModel')
const SubCategory = require('../models/subCategoryModel')
const Gender = require('../models/genderModel')
const multer = require('multer')
const { request } = require('express')
// const upload = multer({ dest: 'uploads/' })



// get all products
const allProducts = async (req, res) => {
    const products = await Product.find({}).sort({ createdAt: -1 })
    // const 
    res.status(200).json(products)
}
const getProductByGenderAndCategory = async (req, res) => {
    const { gender, subCategory } = req.query
    let filters = {};

    if (subCategory && gender) {
        filters = { subCategory: subCategory, gender: gender };
    } else if (subCategory) {
        filters = { subCategory: subCategory };
    } else if (gender) {
        filters = { gender: gender };
    }
    try {
        const filteredProducts = await Product.find(filters)
        res.json(filteredProducts)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }


}
// Product.find({ gender: { $in: req.query.gender } }).
// // {gender: req.params.id} 
// then(product => {
//     res.status(200).json(product)
// }).catch(err => { 
//     console.log(err);
//     res.status(500).json({
//       error: err
//     });
// })
const getProductsByCategory = (req, res) => {
    // const products = await Product.find({}).sort({createdAt:-1})
    Product.find({ subCategory: req.params.id }).
        then(product => {
            res.status(200).json(product)
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
    // try {
    //     const products = await Product.find({subCategory: req.params.id})
    //     res.status(200).json(products)
    // } catch (error) {
    //     res.status(400).json({error : error.message})
    // }
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
    const { name, discount, price, subCategory, brand, quantity, discription, gender } = req.body
    // console.log(category);
    const cover = req.file.path
    try {
        const product = await Product.create({ name, discount, cover, price, subCategory, brand, quantity, discription, gender })
        product.save().then((product) => {

            SubCategory.findByIdAndUpdate(subCategory, {
                $push: { product: product }
            }).then(() => console.log('Product added to category'));

            Gender.findByIdAndUpdate(gender, {
                $push: { product: product }
            }).then(() => console.log("Gender upatess"))

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
    updateProduct,
    getProductsByCategory,
    getProductByGenderAndCategory
}