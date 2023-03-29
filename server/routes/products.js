const express = require('express')
const multer = require('multer')
const {
    addProduct,
    getProduct,
    allProducts,
    deleteProduct,
    updateProduct
} = require("../controllers/productController")
const cors = require('cors')

const upload = multer({dest:'uploads'})
    
const router = express.Router()

//get all products
router.get('/', allProducts)
 
//get single product
router.get('/:id',getProduct)
  
//post new product
router.post('/', upload.single("cover") , addProduct) 

// Delete a produt
router.delete('/:id', deleteProduct)
    
//UPDATE PRODUCT
router.patch('/:id', updateProduct)



module.exports = router         