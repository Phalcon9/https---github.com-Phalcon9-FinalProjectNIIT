const Category = require('../models/categoryModel')
const Product = require('../models/productModel')
const SubCategory = require('../models/subCategoryModel')

const mongoose = require('mongoose')


const allCategory = async (req, res) => {
    const category = await Category.find({}).sort({ createdAt: -1 }).populate("subCategory")
    res.status(200).json(category)
} 
const getCategory = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Product not found' })
    }

    const category = await Category.findById(id)

    if (!category) {
        return res.status(404).json({ error: 'Product not found' })
    }
    console.log("ccc");
    res.status(200).json(category)  
}

const getSubCategoryByCategory = (req, res) => {
    SubCategory.find({ category: req.params.id }).populate('product')
      .then(subCategory => {
        res.status(200).json(subCategory);
      })
      .catch(err => { 
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

const updateCategory = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Product not found' })
    }

    const product = await Category.findOneAndUpdate({ _id: id }, { ...req.body })
    if (!product) {
        return res.status(404).json({ error: 'product not found' })
    }
    res.status(200).json(product)
}

const updateCategoryWithProducts = async (req, res) =>{
    try {
        const {catID} = req.params;
        const icon = req.file.path  
        const {prodID} = req.params;
      
        const newCat = await Category.findByIdAndUpdate(
            catID,
            {
                products : prodID, icon
            },
            {new: true, useFindAndModify: false}
        )
        res.send(newCat)
        console.log(res.send(newCat));
    } catch (error) {
        console.log(error);
    }
}

const addCategory = async (req, res) =>{
    const {productCategory} = req.body
    const icon = req.file.path

    try {
        const category = await  Category.create({productCategory, icon})
        res.status(200).json(category)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {addCategory, allCategory, updateCategory, updateCategoryWithProducts, getCategory,getSubCategoryByCategory}