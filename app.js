const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/amsv2'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log("connected")
})

const usersRouter = require('./routes/user')
app.use('/users', usersRouter)


app.listen(9000, () => {
    console.log("server Started")
})