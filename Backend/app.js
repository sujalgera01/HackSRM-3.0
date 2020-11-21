const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')
const logger = require('morgan')


const app = express()

require('dotenv').config();

// Passport Middleware
require('./configs/passport-setup')


// Connecting Database 
require('./database/mongoose')

//
const PORT = process.env.PORT || 5000 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(passport.initialize());
app.use(passport.session());

// Logger
app.use(logger('dev'))

// Defining Routes For Auth 
app.use(require('./routers/auth'))
// Completing User Info
app.use('/user', require('./routers/userinfo'))
// Adding Reports and Feeds
app.use('/reports', require('./routers/crime'))

app.listen(PORT, console.log(`Server Running on Port ${PORT}`))