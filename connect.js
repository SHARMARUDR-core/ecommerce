require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const user = require('./routes/user')
const login = require('./routes/login')
const item = require('./routes/item')
const poster = require('./routes/poster')
const category = require('./routes/category')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(err => console.error(err))
.then(() => console.log('mogodb connected'))

app.use('/user' , user)
app.use('/login' , login)
app.use('/item' , item)
app.use('/poster' , poster)
app.use('/category' , category)


app.listen(8080 || process.env.PORT , () => console.log('server is listening at port 8080'))