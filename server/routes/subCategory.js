const express = require('express');
const multer = require("multer");

const {addSubCategory, allSubCategory, getProductsByCategory} = require("../controllers/subCategoryController")
const upload = multer({dest:'uploads'})
const router = express.Router();
//get all subcategory
router.get('/', allSubCategory )

router.get('/:id', getProductsByCategory)
// post sub category

router.post('/', upload.any() , addSubCategory)


module.exports = router