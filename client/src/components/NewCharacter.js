import React, { Component } from 'react'
import axios from 'axios'

class NewCharacter extends Component {
    //==============================
    //          State area
    //==============================
    state = {
        game: {},
        characters: []
    }
    getGame = () => {
        const gameId = this.props.match.params.gameId
        axios.get(`/api/games/${gameId}`).then((res) => {
            this.setState({
                game: res.data.game,
                characters: res.data.game.characters
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
            </div>
        );
    }
}

export default NewCharacter;