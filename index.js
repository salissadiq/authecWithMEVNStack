const express = require('express')
const app = express()

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/token-based-auth')
    .then(success => console.log('Connected to MongoDB'))
    .catch(error => console.og(error))

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> {
    console.log(`Server running at ${PORT}`)
})