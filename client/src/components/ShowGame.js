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

    render() {
        return (
            <div>
                <h1>{this.state.game.title}</h1>
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