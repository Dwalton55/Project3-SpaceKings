import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Style = styled.div`
div{

display: grid;
justify-content:center;
align-items:center;

}

.skills{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    
}



`

class NewCharacter extends Component {
    //==============================
    //          State area
    //==============================
    state = {
        game: {},
        name: String,
        concept: String,
        brawn: 1,
        intelligence: 1,
        charm: 1,
        agility: 1,
        wit: 1,
        presence: 1,
        health: 1,
        initiative: 1,
        dodge: 1,
        drive: 1,
        atheletics: {
            name: "atheletics",
            practice: false,
            mastery: false,
            neither: false
        },
        biology: {
            name: "biology",
            practice: false,
            mastery: false,
            neither: false
        },
        computers: {
            name: "computers",
            practice: false,
            mastery: false,
            neither: false
        },
        empathy: {
            name: "empathy",
            practice: false,
            mastery: false,
            neither: false
        },
        engineering: {
            name: "engineering",
            practice: false,
            mastery: false,
            neither: false
        },
        explosives: {
            name: "explosives",
            practice: false,
            mastery: false,
            neither: false
        },
        firearms: {
            name: "firearms",
            practice: false,
            mastery: false,
            neither: false
        },
        investigation: {
            name: "investigation",
            practice: false,
            mastery: false,
            neither: false
        },
        law: {
            name: "law",
            practice: false,
            mastery: false,
            neither: false
        },
        lying: {
            name: "lying",
            practice: false,
            mastery: false,
            neither: false
        },
        melee: {
            name: "melee",
            practice: false,
            mastery: false,
            neither: false
        },
        perform: {
            name: "perform",
            practice: false,
            mastery: false,
            neither: false
        },
        pioleting: {
            name: "pioleting",
            practice: false,
            mastery: false,
            neither: false
        },
        persuasion: {
            name: "persuasion",
            practice: false,
            mastery: false,
            neither: false
        },
        sneaking: {
            name: "sneaking",
            practice: false,
            mastery: false,
            neither: false
        },
        spacewise: {
            name: "spacewise",
            practice: false,
            mastery: false,
            neither: false
        },
        survival: {
            name: "survival",
            practice: false,
            mastery: false,
            neither: false
        },
        telekinese: {
            name: "telekinese",
            practice: false,
            mastery: false,
            neither: false
        },
        telepathy: {
            name: "telepathy",
            practice: false,
            mastery: false,
            neither: false
        },

        // pass down an individual game
        //create a new character
        // save it to the game
    }
    getGame = () => {
        const gameId = this.props.match.params.gameId
        axios.get(`/api/games/${gameId}`).then((res) => {
            this.setState({
                game: res.data.game,
            })
        })
    }

    componentDidMount() {
        this.getGame()
    }

    //==============================
    //          State area
    //==============================


    //==============================
    //          Create funtion
    //==============================
    witHolder = 0
    agilityHolder = 0
    presenceholder = 0
    handleChange = (event) => {
        const inputToTarget = event.target.name
        const userInput = event.target.value
        const newState = { ...this.state }

        switch (inputToTarget) {
            case 'brawn':
                newState['health'] = userInput * 3
                newState[inputToTarget] = userInput
                break;
            case 'presence':
                this.presenceholder = Number(userInput)
                console.log(this.presenceholder)
                newState['initiative'] = Number(this.presenceholder + this.agilityHolder)
                newState['drive'] = Number(this.witHolder + this.presenceholder)
                newState[inputToTarget] = userInput
                break;
            case 'agility':
                this.agilityHolder = Number(userInput)
                console.log(this.agilityHolder)
                newState['initiative'] = Number(this.presenceholder + this.agilityHolder)
                newState['dodge'] = Number(this.witHolder + this.agilityHolder)
                newState[inputToTarget] = userInput
                break;
            case 'wit':
                this.witHolder = Number(userInput)
                console.log(this.witHolder)
                newState['dodge'] = Number(this.witHolder + this.agilityHolder)
                newState['drive'] = Number(this.witHolder + this.presenceholder)
                newState[inputToTarget] = userInput
                break;
            case this.state.atheletics.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const atheletics = {
                        name: 'atheletics',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.atheletics = atheletics
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const atheletics = {
                        name: 'atheletics',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.atheletics = atheletics
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const atheletics = {
                        name: 'atheletics',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.atheletics = atheletics
                    console.log('ran the function pt 3', newState)
                }
                break;
            case this.state.biology.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const biology = {
                        name: 'biology',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.biology = biology
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const biology = {
                        name: 'biology',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.biology = biology
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const biology = {
                        name: 'biology',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.biology = biology
                    console.log('ran the function pt 3', newState)
                }
                break;
            case this.state.computers.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const computers = {
                        name: 'computers',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.computers = computers
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const computers = {
                        name: 'computers',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.computers = computers
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const computers = {
                        name: 'computers',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.computers = computers
                    console.log('ran the function pt 3', newState)
                }
                break;
            case this.state.empathy.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const empathy = {
                        name: 'empathy',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.empathy = empathy
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const empathy = {
                        name: 'empathy',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.empathy = empathy
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const empathy = {
                        name: 'empathy',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.empathy = empathy
                    console.log('ran the function pt 3', newState)
                }
                break;
            case this.state.engineering.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const engineering = {
                        name: 'engineering',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.engineering = engineering
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const engineering = {
                        name: 'engineering',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.engineering = engineering
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const engineering = {
                        name: 'engineering',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.engineering = engineering
                    console.log('ran the function pt 3', newState)
                }
                break;
            case this.state.explosives.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const explosives = {
                        name: 'explosives',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.explosives = explosives
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const explosives = {
                        name: 'explosives',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.explosives = explosives
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const explosives = {
                        name: 'explosives',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.explosives = explosives
                    console.log('ran the function pt 3', newState)
                }
                break;
            case this.state.firearms.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const firearms = {
                        name: 'firearms',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.firearms = firearms
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const firearms = {
                        name: 'firearms',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.firearms = firearms
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const firearms = {
                        name: 'firearms',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.firearms = firearms
                    console.log('ran the function pt 3', newState)
                }
                break;
            case this.state.investigation.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const investigation = {
                        name: 'investigation',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.investigation = investigation
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const investigation = {
                        name: 'investigation',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.investigation = investigation
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const investigation = {
                        name: 'investigation',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.investigation = investigation
                    console.log('ran the function pt 3', newState)
                }
                break;
            case this.state.law.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const law = {
                        name: 'law',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.law = law
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const law = {
                        name: 'law',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.law = law
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const law = {
                        name: 'law',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.law = law
                    console.log('ran the function pt 3', newState)
                }
                break;
                case this.state.lying.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const lying = {
                        name: 'lying',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.lying = lying
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const lying = {
                        name: 'lying',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.lying = lying
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const lying = {
                        name: 'lying',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.lying = lying
                    console.log('ran the function pt 3', newState)
                }
                break;
                case this.state.melee.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const melee = {
                        name: 'melee',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.melee = melee
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const melee = {
                        name: 'melee',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.melee = melee
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const melee = {
                        name: 'melee',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.melee = melee
                    console.log('ran the function pt 3', newState)
                }
                break;
                case this.state.perform.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const perform = {
                        name: 'perform',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.perform = perform
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const perform = {
                        name: 'perform',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.perform = perform
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const perform = {
                        name: 'perform',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.perform = perform
                    console.log('ran the function pt 3', newState)
                }
                break;
                case this.state.pioleting.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const pioleting = {
                        name: 'pioleting',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.pioleting = pioleting
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const pioleting = {
                        name: 'pioleting',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.pioleting = pioleting
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const pioleting = {
                        name: 'pioleting',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.pioleting = pioleting
                    console.log('ran the function pt 3', newState)
                }
                break;
                case this.state.persuasion.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const persuasion = {
                        name: 'persuasion',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.persuasion = persuasion
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const persuasion = {
                        name: 'persuasion',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.persuasion = persuasion
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const persuasion = {
                        name: 'persuasion',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.persuasion = persuasion
                    console.log('ran the function pt 3', newState)
                }
                break;
                case this.state.sneaking.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const sneaking = {
                        name: 'sneaking',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.sneaking = sneaking
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const sneaking = {
                        name: 'sneaking',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.sneaking = sneaking
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const sneaking = {
                        name: 'sneaking',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.sneaking = sneaking
                    console.log('ran the function pt 3', newState)
                }
                break;
                case this.state.spacewise.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const spacewise = {
                        name: 'spacewise',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.spacewise = spacewise
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const spacewise = {
                        name: 'spacewise',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.spacewise = spacewise
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const spacewise = {
                        name: 'spacewise',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.spacewise = spacewise
                    console.log('ran the function pt 3', newState)
                }
                break;
                case this.state.survival.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const survival = {
                        name: 'survival',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.survival = survival
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const survival = {
                        name: 'survival',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.survival = survival
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const survival = {
                        name: 'survival',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.survival = survival
                    console.log('ran the function pt 3', newState)
                }
                break;
                case this.state.telekinese.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const telekinese = {
                        name: 'telekinese',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.telekinese = telekinese
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const telekinese = {
                        name: 'telekinese',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.telekinese = telekinese
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const telekinese = {
                        name: 'telekinese',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.telekinese = telekinese
                    console.log('ran the function pt 3', newState)
                }
                break;
                case this.state.telepathy.name:
                if (userInput == "Mastery") {
                    console.log('hit the function')
                    const telepathy = {
                        name: 'telepathy',
                        mastery: true,
                        practice: false,
                        neither: false
                    }
                    newState.telepathy = telepathy
                    console.log('ran the function', newState)
                } else if (userInput == "Practice") {
                    console.log('hit the function')
                    const telepathy = {
                        name: 'telepathy',
                        mastery: false,
                        practice: true,
                        neither: false
                    }
                    newState.telepathy = telepathy
                    console.log('ran the function pt 2', newState)
                } else if (userInput == "Neither") {
                    console.log('hit the function')
                    const telepathy = {
                        name: 'telepathy',
                        mastery: false,
                        practice: false,
                        neither: true
                    }
                    newState.telepathy = telepathy
                    console.log('ran the function pt 3', newState)
                }
                break;
            default:
                // console.log("Final Conditional")
                newState[inputToTarget] = userInput
                break;
        }

        // console.log("user, input", userInput, inputToTarget)
        console.log("New State", newState)
        this.setState(newState)
    }

    handleSubmit = (event) => {
        const gameId = this.state.game._id
        event.preventDefault()
        axios.post(`/api/games/${gameId}/characters/`, this.state).then((res) => {
            this.props.history.push(`/games/${gameId}`)
            this.props.getGames()
        })
    }
    //==============================
    //          Create funtion
    //==============================

    render() {
        const skillOptions = [
            this.state.atheletics,
            this.state.biology,
            this.state.computers,
            this.state.empathy,
            this.state.engineering,
            this.state.explosives,
            this.state.firearms,
            this.state.investigation,
            this.state.law,
            this.state.lying,
            this.state.melee,
            this.state.perform,
            this.state.pioleting,
            this.state.persuasion,
            this.state.sneaking,
            this.state.spacewise,
            this.state.survival,
            this.state.telekinese,
            this.state.telepathy
        ]
        return (
            <Style>
            <div>
                <h1>Working in NewCharacter</h1>
                <form onSubmit={this.handleSubmit}>
                    <label for="name">Character Name:</label>
                    <input id="name" type="text" name="name"
                        value={this.state.name}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="concept">Concept:</label>
                    <input
                        id="concept"
                        type="text"
                        name="concept"
                        value={this.state.concept}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="brawn">Brawn:</label>
                    <input
                        id="brawn"
                        type="number"
                        name="brawn"
                        value={this.state.brawn}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="intelligence">Intelligence:</label>
                    <input
                        id="intelligence"
                        type="number"
                        name="intelligence"
                        value={this.state.intelligence}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="charm">Charm:</label>
                    <input
                        id="charm"
                        type="number"
                        name="charm"
                        value={this.state.charm}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="agility">Agility:</label>
                    <input
                        id="agility"
                        type="number"
                        name="agility"
                        value={this.state.agility}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="wit">Wit:</label>
                    <input
                        id="wit"
                        type="number"
                        name="wit"
                        value={this.state.wit}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="presence">Presence:</label>
                    <input
                        id="presence"
                        type="number"
                        name="presence"
                        value={this.state.presence}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="health">Health:</label>
                    <input
                        disabled
                        id="health"
                        type="number"
                        name="health"
                        value={this.state.health}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="initiative">Initiative:</label>
                    <input
                        disabled
                        id="initiative"
                        type="number"
                        name="initiative"
                        value={this.state.initiative}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="dodge">Dodge:</label>
                    <input
                        disabled
                        id="dodge"
                        type="number"
                        name="dodge"
                        value={this.state.dodge}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="drive">Drive:</label>
                    <input
                        disabled
                        id="drive"
                        type="number"
                        name="drive"
                        value={this.state.drive}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <div className ="skills">
                    {skillOptions.map((skill) => {
                        return (
                            <div>
                            <label
                                for={skill.name}>
                                {skill.name}
                                <br />
                                <select
                                    value={skill.name}
                                    name={skill.name}
                                    id={skill.name}
                                    onChange={(event) => this.handleChange(event)}>
                                    <option value="Mastery">Mastery</option>
                                    <option value="Practice">Practice</option>
                                    <option value="Neither">Neither</option>
                                </select>
                            </label>
                            </div>
                        )
                    })}
                    </div>



                    <button type="submit">Submit</button>
                </form>
            </div>
            </Style>
        );
    }
}

export default NewCharacter;