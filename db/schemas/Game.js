const Schema = require('mongoose').Schema
const mongoose = require('mongoose')
const {Character} = require('./Characters')
require

const GameSchema = new Schema({
    title : String,
    description: String,
    characters: [Character.schema]
})

const Game = mongoose.model('Game', GameSchema)

module.exports = {Game}