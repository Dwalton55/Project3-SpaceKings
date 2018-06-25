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

module.exports = router;
