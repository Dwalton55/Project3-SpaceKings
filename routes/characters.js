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
  router.put('/:id', (req, res) => {
    Game.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((game) => {
      res.send({game})
    })
  })
module.exports = router;