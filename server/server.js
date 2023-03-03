require('dotenv').config()

//Express application
const express = require('express')
const mongoose = require('mongoose')
const productsRoutes = require('./routes/products')
const cors = require('cors')

//express app
const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method); 
    next()
})

//route
app.use('/api/products', productsRoutes)

//connect to DB
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to DB and Listening on port', process.env.PORT);
        })

    })
    .catch((error) => {
        console.log(error);
        console.log("cant connect");
    })



// process.env 