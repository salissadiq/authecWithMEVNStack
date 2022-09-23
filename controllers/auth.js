const bcrypt=  require('bcrypt')
const jwt = require('jsonwebtoken')

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


exports.signin = tryCatchMiddleware( async(req, res) => {

    if(!req.body.email) return res.status(400).send("Email field is required")
    const user = await User.findOne({ email: req.body.email })

    if(!user) return res.status(404).send("User not found")

    if(!req.body.password) return res.status(400).send("Password field is required")
    const passwordMatch = await bcrypt.compare(req.body.password, user.password)
    if(!passwordMatch) return res.status(400).send("Password mismatch")
    
    const {password, ...others} = user._doc
    const token = jwt.sign({id: user._id}, 'bug_bounty')
    res.header("access_token", token).status(200).send(others)
})