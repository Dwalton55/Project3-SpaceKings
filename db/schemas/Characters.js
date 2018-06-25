const Schema = require('mongoose').Schema
const mongoose = require('mongoose')

const CharactersSchema = new Schema({
    name: String,
    concept: String,
    brawn: {
        value: Number
    },
    intelligence: {
        value: Number
    },
    charm: {
        value: Number
    },
    agility: {
        value: Number
    },
    wit: {
        value: Number
    },
    presence: {
        value: Number
    },
    health: Number,
    stats: {
        initiative: {
            value: Number,
        },
        dodge: {
            value: Number,
        },
        drive: {
            value: Number,
        },
    },
    skills: [String],
    ultimates: [String],

})

const Character = mongoose.model('Character', CharactersSchema)

module.exports = { Character }