require('dotenv').config()
const mongoose = require('mongoose')
const { Character } = require('./schemas/Characters')
const { Game } = require('./schemas/Game')


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("====================")
        console.log('connected to mongoDB')
        console.log("====================")

    })
    .then(() => {
        console.log('test')
    })

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

    atheletics: {
        name: "Atheletics",
        practice: false,
        mastery: false,
        neither: true
    },
    biology: {
        name: "Biology",
        practice: false,
        mastery: false,
        neither: true
    },
    computers: {
        name: "Computers",
        practice: false,
        mastery: false,
        neither: true
    },
    empathy: {
        name: "Empathy",
        practice: false,
        mastery: false,
        neither: true
    },
    engineering: {
        name: "Engineering",
        practice: false,
        mastery: false,
        neither: true
    },
    explosives: {
        name: "Explosions",
        practice: false,
        mastery: false,
        neither: true
    },
    firearms: {
        name: "Firearms",
        practice: false,
        mastery: false,
        neither: true
    },
    investigation: {
        name: "Investigation",
        practice: false,
        mastery: false,
        neither: true
    },
    law: {
        name: "Law",
        practice: false,
        mastery: false,
        neither: true
    },
    lying: {
        name: "Lying",
        practice: false,
        mastery: false,
        neither: true
    },
    melee: {
        name: "Melee",
        practice: false,
        mastery: false,
        neither: true
    },
    perform: {
        name: "Perform",
        practice: false,
        mastery: false,
        neither: true
    },
    pioleting: {
        name: "Pioleting",
        practice: false,
        mastery: false,
        neither: true
    },
    persuasion: {
        name: "Persuasion",
        practice: false,
        mastery: false,
        neither: true
    },
    sneaking: {
        name: "Sneaking",
        practice: false,
        mastery: false,
        neither: true
    },
    spacewise: {
        name: "Spacewise",
        practice: false,
        mastery: false,
        neither: true
    },
    survival: {
        name: "Survival",
        practice: false,
        mastery: false,
        neither: true
    },
    telekinese: {
        name: "Telekinese",
        practice: false,
        mastery: false,
        neither: true
    },
    telepathy: {
        name: "Telepathy",
        practice: false,
        mastery: false,
        neither: true
    },

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
    atheletics: {
        name: "Atheletics",
        practice: false,
        mastery: false,
        neither: true
    },
    biology: {
        name: "Biology",
        practice: false,
        mastery: false,
        neither: true
    },
    computers: {
        name: "Computers",
        practice: false,
        mastery: false,
        neither: true
    },
    empathy: {
        name: "Empathy",
        practice: false,
        mastery: false,
        neither: true
    },
    engineering: {
        name: "Engineering",
        practice: false,
        mastery: false,
        neither: true
    },
    explosives: {
        name: "Explosions",
        practice: false,
        mastery: false,
        neither: true
    },
    firearms: {
        name: "Firearms",
        practice: false,
        mastery: false,
        neither: true
    },
    investigation: {
        name: "Investigation",
        practice: false,
        mastery: false,
        neither: true
    },
    law: {
        name: "Law",
        practice: false,
        mastery: false,
        neither: true
    },
    lying: {
        name: "Lying",
        practice: false,
        mastery: false,
        neither: true
    },
    melee: {
        name: "Melee",
        practice: false,
        mastery: false,
        neither: true
    },
    perform: {
        name: "Perform",
        practice: false,
        mastery: false,
        neither: true
    },
    pioleting: {
        name: "Pioleting",
        practice: false,
        mastery: false,
        neither: true
    },
    persuasion: {
        name: "Persuasion",
        practice: false,
        mastery: false,
        neither: true
    },
    sneaking: {
        name: "Sneaking",
        practice: false,
        mastery: false,
        neither: true
    },
    spacewise: {
        name: "Spacewise",
        practice: false,
        mastery: false,
        neither: true
    },
    survival: {
        name: "Survival",
        practice: false,
        mastery: false,
        neither: true
    },
    telekinese: {
        name: "Telekinese",
        practice: false,
        mastery: false,
        neither: true
    },
    telepathy: {
        name: "Telepathy",
        practice: false,
        mastery: false,
        neither: true
    },
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
        const promises = [

            Game.insertMany(games),
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