const express = require('express')
const multer = require('multer')
const router = express.Router()
const {addCategory, allCategory, updateCategory,updateCategoryWithProducts, getCategory, getProductsByCategory} = require('../controllers/categoryController')
const upload = multer({dest:'uploads'})


router.get('/', allCategory )
router.post('/',  upload.single("icon") , addCategory) 
router.get('/:id/products', getProductsByCategory)
//
router.get('/:id', getCategory)
//UPDATE PRODUCT
router.post('/',upload.single("icon"), updateCategoryWithProducts)

// router.patch('/:id',upload.single("cover") , getProduct)
module.exports = router      