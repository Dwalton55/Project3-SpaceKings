import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class ShowGame extends Component {
    state = {
        game: {},
        characters: []
    }

    componentDidMount() {
        const gameId = this.props.match.params.gameId
        axios.get(`/api/games/${gameId}`).then((res) => {
            this.setState({
                game: res.data.game,
                characters: res.data.game.characters
            })
        })
    }

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
    const updatedGame = {...this.state.game}
    const newGame = updatedGame
    const inputName = event.target.name
    const userInput = event.target.value
    updatedGame[ inputName ] = userInput
    this.setState({ game: updatedGame })
  }
  //=========================================
  //         Handle Change
  //=========================================

    render() {
        return (
            <div>
                 <input
                  type="text"
                  name="title"
                  value={this.state.game.title}
                  onChange={(event) => this.handleChange(event, this.state.game)}
                  onBlur={() => this.updateGame(this.state.game)}
                />

                <p>{this.state.game.description}</p>

                {this.state.characters.map((character) => {
                    return (
                        <div key={character._id}>
                            <h1> <Link to={`/games/${this.state.game._id}/characters/${character._id}`}>{character.name}</Link></h1>
                            <h1>{character.concept}</h1>
                        </div>
                    )
                })}

            </div>
        );
    }
}

export default ShowGame;