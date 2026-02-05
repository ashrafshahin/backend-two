const express = require('express')
const { registrationController } = require('./controllers/authController')
const app = express()

// string data k json or object convert korar middleware
app.use(express.json())

app.post("/registration", registrationController )

app.listen(8000, () => {
    console.log("Server running successfully");
    
})


