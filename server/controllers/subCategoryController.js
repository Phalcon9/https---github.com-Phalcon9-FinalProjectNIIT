const SubCategory = require('../models/subCategoryModel')
const Category = require('../models/categoryModel')
const Product = require('../models/productModel')
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

const getProductsByCategory = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Product not found' })
  }

  const subcategory = await SubCategory.findById(id)
  if (!subcategory) {
    return res.status(404).json({ error: 'Product not found' })
}
console.log("ccc");
res.status(200).json(subcategory)  
 
    // Product.find({ subCategory: req.params.id })
    //   .then(products => {
    //     res.status(200).json(products);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     res.status(500).json({
    //       error: err
    //     });
    //   }); 
   
  };
module.exports = {allSubCategory, addSubCategory, getProductsByCategory} 