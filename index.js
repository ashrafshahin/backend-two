const express = require('express')
const mongoose = require('mongoose')
const { registrationController } = require('./controllers/authController')
const app = express()

// string data k json or object convert korar middleware
app.use(express.json())

app.post("/registration", registrationController)

mongoose.connect('mongodb+srv://shahin_db_user:BaoxjkvRUjnlT6DW@clustershahin.nicn5ni.mongodb.net/?appName=ClusterShahin').then(() => {
    console.log('Database Connected');
    
})

app.listen(8000, () => {
    console.log("Server running successfully");
    
})


