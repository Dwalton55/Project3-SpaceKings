const Schema = require('mongoose').Schema
const mongoose = require('mongoose')

const SkillsSchema = new Schema({
    name: String,
    practice: Boolean,
    mastery: Boolean,
    neither: Boolean
})

const Skill = mongoose.model('skill', SkillsSchema)

module.exports = { Skill }