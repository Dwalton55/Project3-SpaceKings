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
    atheletics: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    biology: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    computers: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    empathy: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    engineering: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    explosives: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    firearms: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    investigation: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    law: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    lying: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    melee: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    perform: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    pioleting: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    persuasion: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    sneaking: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    spacewise: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    survival: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    telekinese: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    telepathy: {
        name: String,
        practice: Boolean,
        mastery: Boolean,
        neither: Boolean
    },
    skills: [{}],
    ultimates: [{}],

})

const Character = mongoose.model('Character', CharactersSchema)

module.exports = { Character }