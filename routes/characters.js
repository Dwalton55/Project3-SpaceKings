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
    charToEdit.initiative = req.body.initiative
    charToEdit.dodge = req.body.dodge
    charToEdit.drive = req.body.drive

    if (req.body.atheletics) {
        charToEdit.atheletics.practice = req.body.atheletics.practice
        charToEdit.atheletics.mastery = req.body.atheletics.mastery
        charToEdit.atheletics.neither = req.body.atheletics.neither
    }
    if (req.body.biology) {
        charToEdit.biology.practice = req.body.biology.practice
        charToEdit.biology.mastery = req.body.biology.mastery
        charToEdit.biology.neither = req.body.biology.neither
    }

    if (req.body.computers) {
        charToEdit.computers.practice = req.body.computers.practice
        charToEdit.computers.mastery = req.body.computers.mastery
        charToEdit.computers.neither = req.body.computers.neither
    }

    if (req.body.empathy) {
        charToEdit.empathy.practice = req.body.empathy.practice
        charToEdit.empathy.mastery = req.body.empathy.mastery
        charToEdit.empathy.neither = req.body.empathy.neither
    }
    if (req.body.engineering) {
        charToEdit.engineering.practice = req.body.engineering.practice
        charToEdit.engineering.mastery = req.body.engineering.mastery
        charToEdit.engineering.neither = req.body.engineering.neither
    }
    if (req.body.explosives) {
        charToEdit.explosives.practice = req.body.explosives.practice
        charToEdit.explosives.mastery = req.body.explosives.mastery
        charToEdit.explosives.neither = req.body.explosives.neither
    }
    if (req.body.firearms) {
        charToEdit.firearms.practice = req.body.firearms.practice
        charToEdit.firearms.mastery = req.body.firearms.mastery
        charToEdit.firearms.neither = req.body.firearms.neither
    }
    if (req.body.investigation) {
        charToEdit.investigation.practice = req.body.investigation.practice
        charToEdit.investigation.mastery = req.body.investigation.mastery
        charToEdit.investigation.neither = req.body.investigation.neither
    }
    if (req.body.law) {
        charToEdit.law.practice = req.body.law.practice
        charToEdit.law.mastery = req.body.law.mastery
        charToEdit.law.neither = req.body.law.neither
    }
    if (req.body.lying) {
        charToEdit.lying.practice = req.body.lying.practice
        charToEdit.lying.mastery = req.body.lying.mastery
        charToEdit.lying.neither = req.body.lying.neither
    }
    if (req.body.melee) {
        charToEdit.melee.practice = req.body.melee.practice
        charToEdit.melee.mastery = req.body.melee.mastery
        charToEdit.melee.neither = req.body.melee.neither
    }
    if (req.body.perform) {
        charToEdit.perform.practice = req.body.perform.practice
        charToEdit.perform.mastery = req.body.perform.mastery
        charToEdit.perform.neither = req.body.perform.neither
    }
    if (req.body.pioleting) {
        charToEdit.pioleting.practice = req.body.pioleting.practice
        charToEdit.pioleting.mastery = req.body.pioleting.mastery
        charToEdit.pioleting.neither = req.body.pioleting.neither
    }
    if (req.body.persuasion) {
        charToEdit.persuasion.practice = req.body.persuasion.practice
        charToEdit.persuasion.mastery = req.body.persuasion.mastery
        charToEdit.persuasion.neither = req.body.persuasion.neither
    }
    if (req.body.sneaking) {
        charToEdit.sneaking.practice = req.body.sneaking.practice
        charToEdit.sneaking.mastery = req.body.sneaking.mastery
        charToEdit.sneaking.neither = req.body.sneaking.neither
    }
    if (req.body.spacewise) {
        charToEdit.spacewise.practice = req.body.spacewise.practice
        charToEdit.spacewise.mastery = req.body.spacewise.mastery
        charToEdit.spacewise.neither = req.body.spacewise.neither
    }
    if (req.body.survival) {
        charToEdit.survival.practice = req.body.survival.practice
        charToEdit.survival.mastery = req.body.survival.mastery
        charToEdit.survival.neither = req.body.survival.neither
    }
    if (req.body.telekinese) {
        charToEdit.telekinese.practice = req.body.telekinese.practice
        charToEdit.telekinese.mastery = req.body.telekinese.mastery
        charToEdit.telekinese.neither = req.body.telekinese.neither
    }
    if (req.body.telepathy) {
        charToEdit.telepathy.practice = req.body.telepathy.practice
        charToEdit.telepathy.mastery = req.body.telepathy.mastery
        charToEdit.telepathy.neither = req.body.telepathy.neither
    }

    const savedGame = await game.save()
    res.send({
        character: charToEdit
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

