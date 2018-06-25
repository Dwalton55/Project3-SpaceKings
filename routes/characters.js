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
    const gameplan = new Gameplan(req.body)
    User.findById(req.params.id)
      .then((userID) => {
        userID.gamePlans.push(gameplan)
        return userID.save()
      })
      .then(() => {
        res.redirect(`/user/${req.params.id}/gameplans`)
      })
  })


module.exports = router;