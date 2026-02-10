
const registrationController = (req, res) => {
    // require.bode te sob data thakbe, destructure kora hoise
    const { username, email, password } = req.body

    // conditional validation with error message and status work
    const errors = []
    const successStatus = 201
    if (!successStatus) {
        errors.push({
            errorType: 'successStatus',
            message: 'Server Error...',
        })
    }


    if (!username) {
        errors.push({
            errorType: 'username',
            message: 'username required llll',
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
            message: 'password required here'
        })
    }

    res.status(successStatus).send({
        success: errors.length == 0 ? true : false,
        errors: errors.length == 0 ? null : errors,
        message: errors.length == 0 ? "Registration Successful" : "Registration Failed",
    })

}
// {} 2nd bracket deye OBJECT akare pathano hoi... import object akare hobe...

module.exports = { registrationController }