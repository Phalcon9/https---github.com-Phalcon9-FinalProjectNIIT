const express = require('express')
const multer = require('multer')
const router = express.Router()
const {addGender, getGender} = require('../controllers/genderController')
const upload = multer({dest:'uploads'})

router.post('/', upload.any() ,addGender)
router.get('/', getGender)

module.exports = router