import React, { Component } from 'react';
import axios from 'axios'


class CharacterSheet extends Component {

    state = {
        character: {}
    }

    getCharacter = ()=>{
        const gameId = this.props.match.params.gameId
        const charId = this.props.match.params.charId
        axios.get(`/api/games/${gameId}/characters/${charId}`).then((res) => {
            this.setState({
                game: res.data.game,
                characters: res.data.game.characters.id(charId)
            })
        })
    }

    componentDidMount() {
        this.getCharacter()
    }

    render() {
        
        return (
            <div>
                working in CharacterSheet
            </div>
        );
    }
}

export default CharacterSheet;