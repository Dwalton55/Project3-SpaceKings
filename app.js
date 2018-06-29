require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const gamesRouter = require('./routes/games')
const charactersRouter = require('./routes/characters')
// const Skill =require('./routes/Skills')

mongoose.connect(process.env.MONGODB_URI)


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(bodyParser.json())

// routes
app.use('/api/games', gamesRouter)
app.use('/api/games/:gameId/characters', charactersRouter)
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
  })

module.exports = app;
