const express = require('express');
const router = express.Router({ mergeParams: true })
const {Game} = require('../db/schemas/Game')
const {Character} = require('../db/schemas/Characters')


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
    const savedGame = await game.save()
    res.send({
      game: savedGame
    })
  })
module.exports = router;

// char.name = update.name
//         char.concept = update.concept
//         char.brawn = update.brawn
//         char.intelligence = update.intelligence
//         char.charm = update.charm
//         char.agility = update.agility
//         char.wit = update.wit
//         char.presence = update.presence
//         char.health = update.health
//         char.stats.initiative = update.stats.initiative
//         char.stats.dodge = update.stats.dodge
//         char.stats.drive = update.stats