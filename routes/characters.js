const express = require('express');
const router = express.Router({ mergeParams: true })
const { Game } = require('../db/schemas/Game')
const { Character } = require('../db/schemas/Characters')


//all characters
router.get('/', (req, res, next) => {
    Game.findById(req.params.gameId)
        .then((game) => {
            const characters = game.characters
            res.send({
                characters
            })
        })
})

// new
router.post('/', (req, res) => {
    const character = new Character(req.body)
    Game.findById(req.params.gameId)
        .then((game) => {
            game.characters.push(character)
            return game.save()
        })
        .then(() => {
            res.send(character)
        })
})

//show
router.get('/:id', (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) => {
            res.send({
                character: game.characters.id(req.params.id)
            })
        })
})


//update
router.patch('/:id', async (req, res) => {
    const game = await Game.findById(req.params.gameId)
    const charId = req.params.id
    const charToEdit = game.characters.id(charId)
    
    charToEdit.name = req.body.name
    charToEdit.concept = req.body.concept

    charToEdit.name = req.body.name
    charToEdit.concept = req.body.concept
    charToEdit.brawn = req.body.brawn
    charToEdit.intelligence = req.body.intelligence
    charToEdit.charm = req.body.charm
    charToEdit.agility = req.body.agility
    charToEdit.wit = req.body.wit
    charToEdit.presence = req.body.presence
    charToEdit.health = req.body.health
    charToEdit.initiative = req.body.stats.initiative
    charToEdit.dodge = req.body.dodge
    charToEdit.drive = req.body.drive

    const savedGame = await game.save()
    res.send({
        game: savedGame
    })
})

//delete
router.delete('/:id', async (req, res) => {
    // a promise to find the specific id and use that as user.
    const game = await Game.findById(req.params.gameId)
    // this line locates the specific idea by its id number and then removes it.
    game.characters.id(req.params.id).remove()
    // this line saves the new user information
    const savedGame = await game.save()
    res.send({
      game: savedGame
    })
  })
module.exports = router;

