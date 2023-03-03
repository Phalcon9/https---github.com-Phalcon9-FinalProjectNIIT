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

    
const router = express.Router()
 const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
 })
 const upload = multer({
    storage:Storage
 }).single('testImage')
 
//get all products
router.get('/', allProducts)
 
//get single product
router.get('/:id',getProduct)

//post new product
router.post('/', addProduct) 

// Delete a produt
router.delete('/:id', deleteProduct)

//UPDATE PRODUCT
router.patch('/:id', updateProduct)



module.exports = router 