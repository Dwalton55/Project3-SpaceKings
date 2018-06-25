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

module.exports = router;
