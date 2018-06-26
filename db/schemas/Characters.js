const Schema = require('mongoose').Schema
const mongoose = require('mongoose')

const CharactersSchema = new Schema({
    name: String,
    concept: String,
    brawn: Number,
    intelligence: Number,
    charm: Number,
    agility: Number,
    wit: Number,
    presence: Number,
    health: Number,
    initiative: Number,
    dodge: Number,
    drive: Number,
    skills: [String],
    ultimates: [String],

})

const Character = mongoose.model('Character', CharactersSchema)

module.exports = { Character }