const express = require('express');
const multer = require("multer");

const {addSubCategory, allSubCategory} = require("../controllers/subCategoryController")
const upload = multer({dest:'uploads'})
const router = express.Router();
//get all subcategory
router.get('/', allSubCategory )

// post sub category

router.post('/', upload.any() , addSubCategory)


module.exports = router