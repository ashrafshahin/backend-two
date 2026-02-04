const express = require('express')
const app = express()

// string data k json or object convert korar middleware
app.use(express.json())

app.post("/registration", (req, res) => {
    // require.bode te sob data thakbe, destructure kora hoise
    const { username, email, password } = req.body
    
    // conditional validation with error message and status work
    const errors = []
    // const successStatus = 201
    // const statusCode = success === 201 ? 201 : 401;
    // const statusCode = (code === 201) ? "Success" : "Failure";
    // const status = (code == 201 && code < 401) ? "Success" : "Failure";

    if (!username) {
        errors.push({
            errorType : 'username',
            message : 'username required',
        })
    }
    if (!email) {
        errors.push({
            errorType: 'email',
            message: 'email required',
        })
    }
    if (!password) {
        errors.push({
            errorType: 'password',
            message : 'password required'
        })
    }

    res.status(201).send({
        success: errors.length == 0 ? true : false,
        errors: errors.length == 0 ? null : errors,
        message: errors.length == 0 ? "Registration Successful" : "Registration Failed",
    })

})

app.listen(8000, () => {
    console.log("Server running successfully");
    
})


