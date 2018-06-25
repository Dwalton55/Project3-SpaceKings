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

  router.get('/:id', (req, res) => {
    const gameid = req.params.gameId
    const charId = req.params.id
    Game.findById(gameid)
    .then((game) => {
      const character = game.characters.id(charId)
      res.send({
        character,
      })
    })
  })

module.exports = router;