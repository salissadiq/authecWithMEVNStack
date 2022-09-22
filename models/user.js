const Joi = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
        unique: true,
        trim: true
    },
    // phone: {
    //     type: String,
    //     minlength: 8,
    //     maxlength: 255,
    //     trim: true,
    //     default: null
    // },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255,
        trim: true
    }
})

exports.User = mongoose.model('User', userSchema)

exports.validateUser = (user) => {
    const schema = Joi.object({
        name: Joi.string().required().min(5).max(255).trim(),
        email: Joi.string().email().required().min(2).max(255).trim(),
        password: Joi.string().required().min(6).max(255).trim()
    })
    return schema.validate(user)
}

