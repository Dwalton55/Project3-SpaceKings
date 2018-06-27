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
        brawn: Number,
        intelligence: Number,
        charm: Number,
        agility: Number,
        wit: Number,
        presence: Number,
        health: Number,
        initiative: Number,
        dodge: Number,
        drive: Number,

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
        })
    }

    // componentDidMount() {
    //     this.getGame()
    // }

    //==============================
    //          State area
    //==============================


    //==============================
    //          Create funtion
    //==============================


    // createNewIdea = () => {
    //     // matchs the user id to the clicked on item?
    //     const gameId = this.props.match.params.gameId
    //     // post request to the user id. renames res
    //     axios.post(`/api/games/${gameId}/characters/`).then((res) => {
    //         // saves the state
    //         this.setState({
    //             game: res.data.game,
    //             characters: res.data.game.characters
    //         })
    //     })
    // }

    handleChange = (event) => {
        const inputToTarget = event.target.name
        const userInput = event.target.value

        const newState = { ...this.state }
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
                    <label for="name">Character Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="concept">Concept</label>
                    <input
                        id="concept"
                        type="text"
                        name="concept"
                        value={this.state.concept}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="brawn">Brawn</label>
                    <input
                        id="brawn"
                        type="text"
                        name="brawn"
                        value={this.state.brawn}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="intelligence">Intelligence</label>
                    <input
                        id="intelligence"
                        type="text"
                        name="intelligence"
                        value={this.state.intelligence}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="charm">Charm</label>
                    <input
                        id="charm"
                        type="text"
                        name="charm"
                        value={this.state.charm}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="agility">Agility</label>
                    <input
                        id="agility"
                        type="text"
                        name="agility"
                        value={this.state.agility}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="wit">Wit</label>
                    <input
                        id="wit"
                        type="text"
                        name="wit"
                        value={this.state.wit}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="presence">Presence</label>
                    <input
                        id="presence"
                        type="text"
                        name="presence"
                        value={this.state.presence}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="health">Health</label>
                    <input
                        id="health"
                        type="text"
                        name="health"
                        value={this.state.health}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="initiative">Initiative</label>
                    <input
                        id="initiative"
                        type="text"
                        name="initiative"
                        value={this.state.initiative}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="dodge">Dodge</label>
                    <input
                        id="dodge"
                        type="text"
                        name="dodge"
                        value={this.state.dodge}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br />
                    <label for="drive">Drive</label>
                    <input
                        id="drive"
                        type="text"
                        name="drive"
                        value={this.state.drive}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default NewCharacter;