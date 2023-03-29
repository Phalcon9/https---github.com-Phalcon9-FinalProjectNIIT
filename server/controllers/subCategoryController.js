const SubCategory = require('../models/subCategoryModel')
const Category = require('../models/categoryModel')
const mongoose = require('mongoose')

const allSubCategory = async (req, res) => {
    const subCategory = await SubCategory.find({}).sort({createdAt:-1}).populate('product')
    res.status(200).json(subCategory)
}

const addSubCategory = async (req, res) => {
    console.log(req.body);
     const { innerCategory, category } = req.body
    try {
        const subCategory= await SubCategory.create({innerCategory, category})
        subCategory.save().then((subCategory)=>{
            Category.findByIdAndUpdate(category, {
                $push: { subCategory : subCategory }
            }).then(() =>console.log('Sub Category added'))
        })
        res.status(200).json(subCategory)
    } catch (error) {
        res.status(400).json({ error: error.message }) 
    }

} 
module.exports = {allSubCategory, addSubCategory}