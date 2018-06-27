import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

class ShowGame extends Component {
    //==============================
    //          State area
    //==============================

    state = {
        game: {},
        characters: [],
        redirect: false
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
        // const gameId = this.props.match.params.gameId
        // axios.get(`/api/games/${gameId}`).then((res) => {
        //     this.setState({
        //         game: res.data.game,
        //         characters: res.data.game.characters
        //     })
        // })
    }

    //==============================
    //          State area
    //==============================


    //========================================
    //           Update Function
    //========================================

    updateGame = () => {
        const gameId = this.props.match.params.gameId
        const gameToUpdate = this.state.game
        axios.put(`/api/games/${gameId}`, gameToUpdate).then((res) => {

            this.setState({
                game: res.data.game
            })
        })
    }
    //========================================
    //           Update Function
    //========================================

    //=========================================
    //         Handle Change
    //=========================================
    handleChange = (event) => {
        console.log('hello there')
        const updatedGame = { ...this.state.game }
        const inputName = event.target.name
        const userInput = event.target.value
        updatedGame[inputName] = userInput
        this.setState({ game: updatedGame })
    }
    //=========================================
    //         Handle Change
    //=========================================

    //=========================================
    //         Delete area 
    //=========================================

    deleteGame = () => {
        const gameId = this.props.match.params.gameId
        axios.delete(`/api/games/${gameId}/`).then((res) => {
            this.setState({
                game: res.data.game,
                redirect: true
            })
            // this.props.history.push('/games')
        })
    }

    deleteChar = (charId) => {
        // match by id
        const gameId = this.props.match.params.gameId
        //  delete request renamed res 
        axios.delete(`/api/games/${gameId}/characters/${charId}`).then((res) => {
            //save stat
            this.setState({
                game: res.data.game,
                characters: res.data.game.characters
            })
        })
    }
    //=========================================
    //         Delete area
    //=========================================

    render() {
        if (this.state.redirect) {
            return <Redirect push to={`/games`} />
        }
        return (
            <div>
                <form id="UpdateForm">
                    <input
                        type="text"
                        name="title"
                        value={this.state.game.title}
                        onChange={(event) => this.handleChange(event, this.state.game)}
                        onBlur={() => this.updateGame(this.state.game)}
                    />
                    <br />
                    <textarea
                        name="description"
                        cols="50" rows="8"
                        value={this.state.game.description}
                        onChange={(event) => this.handleChange(event, this.state.game)}
                        onBlur={() => this.updateGame(this.state.game)}></textarea>
                </form>
                <button onClick={() => this.deleteGame(this.props.match.params.gameId)}> Delete this game</button>


                {this.state.characters.map((character) => {
                    return (
                        <div key={character._id}>
                            <h1> <Link to={`/games/${this.state.game._id}/characters/${character._id}`}>{character.name}</Link></h1>
                            <h1>{character.concept}</h1>
                            <button onClick={() => this.deleteChar(character._id)}>X</button>
                        </div>
                    )
                })}

            </div>
        );
    }
}

export default ShowGame;