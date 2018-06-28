import React, { Component } from 'react'
import axios from 'axios'

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

        // pass down an individual game
        //create a new character
        // save it to the game
    }
    getGame = () => {
        const gameId = this.props.match.params.gameId
        axios.get(`/api/games/${gameId}`).then((res) => {
            this.setState({
                game: res.data.game
            })
            console.log(res.data)
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


        if (inputToTarget === 'brawn') {
            newState['health'] = userInput * 3
        }

        if (inputToTarget === 'presence') {
            this.presenceholder = Number(userInput)
            console.log(this.presenceholder)
            newState['initiative'] = Number(this.presenceholder + this.agilityHolder)
            newState['drive'] = Number(this.witHolder + this.presenceholder)
            // newState['initiative'] = userInput + this.state.agility
        }

        if (inputToTarget === 'agility') {
            this.agilityHolder = Number(userInput)
            console.log(this.agilityHolder)
            newState['initiative'] = Number(this.presenceholder + this.agilityHolder)
            newState['dodge'] = Number(this.witHolder + this.agilityHolder)
            // newState['initiative'] = userInput + this.state.agility
        }

        if (inputToTarget === 'wit') {
            this.witHolder = Number(userInput)
            console.log(this.witHolder)
            newState['dodge'] = Number(this.witHolder + this.agilityHolder)
            newState['drive'] = Number(this.witHolder + this.presenceholder)
            // newState['initiative'] = userInput + this.state.agility
        }
        newState[inputToTarget] = userInput
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
        return (
            <div>
                <h1>Working in NewCharacter</h1>
                <form onSubmit={this.handleSubmit}>
                    <label for="name">Character Name:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default NewCharacter;