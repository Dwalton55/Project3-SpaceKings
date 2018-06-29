require('dotenv').config()
const mongoose = require('mongoose')
const { Character } = require('./schemas/Characters')
const { Game } = require('./schemas/Game')
const { Skill } = require('./schemas/Skills')


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("====================")
        console.log('connected to mongoDB')
        console.log("====================")

    })
    .then(() => {
        console.log('test')
    })

const atheletics = new Skill({
    name: "Atheletics",
    practice: false,
    mastery: false,
    neither: true
})

const biology = new Skill({
    name: "Biology",
    practice: false,
    mastery: false,
    neither: true
})

const computers = new Skill({
    name: "Computers",
    practice: false,
    mastery: false,
    neither: true
})

const empathy = new Skill({
    name: "Empathy",
    practice: false,
    mastery: false,
    neither: true
})

const engineering = new Skill({
    name: "Engineering",
    practice: false,
    mastery: false,
    neither: true
})

const explosives = new Skill({
    name: "Explosives",
    practice: false,
    mastery: false,
    neither: true
})

const firearms = new Skill({
    name: "Firearms",
    practice: false,
    mastery: false,
    neither: true
})

const investigation = new Skill({
    name: "Investigation",
    practice: false,
    mastery: false,
    neither: true
})

const law = new Skill({
    name: "Law",
    practice: false,
    mastery: false,
    neither: true
})

const lying = new Skill({
    name: "Lying",
    practice: false,
    mastery: false,
    neither: true
})

const melee = new Skill({
    name: "Melee",
    practice: false,
    mastery: false,
    neither: true
})

const perform = new Skill({
    name: "Perform",
    practice: false,
    mastery: false,
    neither: true
})

const pioleting = new Skill({
    name: "Pioleting",
    practice: false,
    mastery: false,
    neither: true
})

const persuasion = new Skill({
    name: "Persuasion",
    practice: false,
    mastery: false,
    neither: true
})

const sneaking = new Skill({
    name: "Sneaking",
    practice: false,
    mastery: false,
    neither: true
})

const spacewise = new Skill({
    name: "Spacewise",
    practice: false,
    mastery: false,
    neither: true
})

const survival = new Skill({
    name: "Survival",
    practice: false,
    mastery: false,
    neither: true
})

const telekinese = new Skill({
    name: "Telekinese",
    practice: false,
    mastery: false,
    neither: true
})

const telepathy = new Skill({
    name: "Telepathy",
    practice: false,
    mastery: false,
    neither: true
})

const skills = [atheletics, biology, computers, empathy, engineering, explosives, firearms, investigation, law, lying, melee, perform, pioleting, persuasion, sneaking, spacewise, survival, telekinese, telepathy]
const Deon = new Character({
    name: "deon",
    concept: "more stuff",
    brawn: 1,
    intelligence: 1,
    charm: 1,
    agility: 1,
    wit: 1,
    presence: 1,
    health: 1,
    initiative: 1,
    dodge: 1,
    drive: 1,

    skills: ["String", "skills", "together"],
    ultimates: ["String", "ults"],

})

const Tk = new Character({
    name: "tk",
    concept: "stuff",

    brawn: 1,
    intelligence: 1,
    charm: 1,
    agility: 1,
    wit: 1,
    presence: 1,
    health: 1,
    initiative: 1,
    dodge: 1,
    drive: 1,
    skills: ["String", "skills", "together"],
    ultimates: ["String", "ults"],

})

const game1 = new Game({
    title: "The Island",
    description: "Survive zombies on an island",
    characters: [Deon, Tk]
})

const game2 = new Game({
    title: "The Island 2",
    description: "Survive zombies on a 2nd island",
    characters: [Deon, Tk]
})

games = [game1, game2]

Game.remove()
    .then(() => {
        Skills.remove()
    })
    .then(() => {
        const promises = [

            Game.insertMany(games),
            Skill.insertMany(skills),
        ]
        // return Promise.all() makes it so an array of promises don't return before they are all complete
        return Promise.all(promises)
    })
    .then(() => {
        
        console.log("============")
        console.log("closing db")
        console.log("============")
        // close the database
        mongoose.connection.close()
    }).catch((err) => {
        console.log('ERROR', err)
    })