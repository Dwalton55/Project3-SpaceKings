require('dotenv').config()
const mongoose = require('mongoose')
const {Character} =require('./schemas/Characters')
const {Game} =require('./schemas/Game')


mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("====================")
    console.log('connected to mongoDB')
    console.log("====================")

})
.then(() => {
    console.log('test')
})

const Deon= new Character({
    name : "deon",
    concept: "more stuff",
    attributes:{
        brawn:{
            name: "Brawn",
            value: 1
        },
        intelligence:{
            name: "Intelligence",
            value: 1
        },
        charm:{
            name: "Charm",
            value: 1
        },
        agility:{
            name: "Agility",
            value: 1
        },
        wit:{
            name: "Wit",
            value: 1
        },
        presence:{
            name: "Presence",
            value: 1
        }
    },
    health: 1,
    stats:{
        initiative: {
            name: "Initiative",
            value: 1
        },
        dodge: {
            name: "Dodge",
            value: 1
        },
        drive: {
            name: "Drive",
            value: 1
        },
    },
    skills: ["String","skills","together"],
    ultimates:["String","ults"],

})

const Tk = new Character({
    name : "tk",
    concept: "stuff",
    
        brawn:{
            name: "Brawn",
            value: 1
        },
        intelligence:{
            name: "Intelligence",
            value: 1
        },
        charm:{
            name: "Charm",
            value: 1
        },
        agility:{
            name: "Agility",
            value: 1
        },
        wit:{
            name: "Wit",
            value: 1
        },
        presence:{
            name: "Presence",
            value: 1
        },
    
    health: 1,
    stats:{
        initiative: {
            name: "Initiative",
            value: 1
        },
        dodge: {
            name: "Dodge",
            value: 1
        },
        drive: {
            name: "Drive",
            value: 1
        },
    },
    skills: ["String","skills","together"],
    ultimates:["String","ults"],

})

const game1 = new Game({
    title : "The Island",
    description: "Survive zombies on an island",
    characters: [Deon,Tk]
})

const game2 = new Game({
    title : "The Island 2",
    description: "Survive zombies on a 2nd island",
    characters: [Deon,Tk]
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