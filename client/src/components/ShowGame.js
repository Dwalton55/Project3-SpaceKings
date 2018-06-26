import React, { Component } from 'react';
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
                working in Show game
            </div>
        );
    }
}

export default ShowGame;