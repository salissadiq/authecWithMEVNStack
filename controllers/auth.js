const bcrypt=  require('bcrypt')

const { tryCatchMiddleware } = require("../middlewares/tryCatch")
const {User, validateUser } = require("../models/user")
exports.signup = tryCatchMiddleware( async(req, res) => {

    const {error} = validateUser(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const checkuser = await User.findOne({email: req.body.email})
    if(checkuser) return res.status(400).send("Email is already exist")

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    
    const user = new User({...req.body, password: hashedPassword})
    await user.save()
    res.status().send("Account has been created!")

})

exports.login = tryCatchMiddleware( async(req, res) => {
    
})
