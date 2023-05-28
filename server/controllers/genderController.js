const Gender = require('../models/genderModel');
const mongoose = require('mongoose')

const addGender  = async (req, res) =>{
    const { gender } = req.body
    
    try {
        const genders = await Gender.create({gender});
        res.status(200).json(genders)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getGender = async (req, res) => {
    const gender = await Gender.find({}).sort({ createdAt: -1 })
    res.status(200).json(gender)
}

module.exports = {addGender, getGender}