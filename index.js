const express = require('express')
const app = express()
const mongoose = require('mongoose')

const userAuth = require('./routes/auth')
mongoose.connect('mongodb://localhost/token-based-auth')
    .then(success => console.log('Connected to MongoDB'))
    .catch(error => console.og(error))

app.use(express.json())
app.use('/api/auth/', userAuth)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> {
    console.log(`Server running at ${PORT}`)
})