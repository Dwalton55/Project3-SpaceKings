var express = require('express');
var router = express.Router();
const {Game} = require('../db/schemas/Game')

//all games
router.get('/', function (req, res) {
  //finds all user models and makes an array of users
  Game.find().then((games) => {
    //display all users
    res.send({
      games
    })
  })
})

//new
router.post('/', (req, res) => {
  const newGame = new Game(req.body)
  newGame.save()
  .then((game)=>{
    res.send(game)
  })
})

//show
router.get('/:id', (req, res) => {
  Game
    .findById(req.params.id)
    .then((game) => {
      res.send({ game })
    })
})

//Update
router.put('/:id', (req, res) => {
  Game.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((game) => {
    res.send({game})
  })
})

router.delete('/:id', (req, res) => {
  Game.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Delete ')
    })
})
module.exports = router;
