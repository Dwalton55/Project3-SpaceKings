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
                character: res.data.character
            })
        })
    }

    componentDidMount() {
        this.getCharacter()
    }

    render() {
        const character = this.state.character
        return (
            <div>
                working in CharacterSheet
                <form action="">
                <label for="name">Character Name</label>
                <input
                        id="name"
                        type="text"
                        name="name"
                        value={character.name}
                        // onChange={(event) => this.handleChange(event, this.state.game)}
                        // onBlur={() => this.updateGame(this.state.game)}
                    />
                    <br/>
                <label for="concept">Concept</label>
                <input
                        id="concept"
                        type="text"
                        name="concept"
                        value={character.concept}
                        // onChange={(event) => this.handleChange(event, this.state.game)}
                        // onBlur={() => this.updateGame(this.state.game)}
                    />
                    <br/>
                <label for="brawn">Brawn</label>
                <input
                        id="brawn"
                        type="text"
                        name="brawn"
                        value={character.brawn}
                        // onChange={(event) => this.handleChange(event, this.state.game)}
                        // onBlur={() => this.updateGame(this.state.game)}
                    />
                    <br/>
                <label for="intelligence">Intelligence</label>
                <input
                        id="intelligence"
                        type="text"
                        name="intelligence"
                        value={character.intelligence}
                        // onChange={(event) => this.handleChange(event, this.state.game)}
                        // onBlur={() => this.updateGame(this.state.game)}
                    />
                    <br/>
                <label for="charm">Charm</label>
                <input
                        id="charm"
                        type="text"
                        name="charm"
                        value={character.charm}
                        // onChange={(event) => this.handleChange(event, this.state.game)}
                        // onBlur={() => this.updateGame(this.state.game)}
                    />
                    <br/>
                <label for="agility">Agility</label>
                <input
                        id="agility"
                        type="text"
                        name="agility"
                        value={character.agility}
                        // onChange={(event) => this.handleChange(event, this.state.game)}
                        // onBlur={() => this.updateGame(this.state.game)}
                    />
                    <br/>
                <label for="wit">Wit</label>
                <input
                        id="wit"
                        type="text"
                        name="wit"
                        value={character.wit}
                        // onChange={(event) => this.handleChange(event, this.state.game)}
                        // onBlur={() => this.updateGame(this.state.game)}
                    />
                    <br/>
                <label for="presence">Presence</label>
                <input
                        id="presence"
                        type="text"
                        name="presence"
                        value={character.presence}
                        // onChange={(event) => this.handleChange(event, this.state.game)}
                        // onBlur={() => this.updateGame(this.state.game)}
                    />
                    <br/>
                <label for="health">Health</label>
                <input
                        id="health"
                        type="text"
                        name="health"
                        value={character.brawn * 3}
                        // onChange={(event) => this.handleChange(event, this.state.game)}
                        // onBlur={() => this.updateGame(this.state.game)}
                    />
                    <br/>
                <label for="initiative">Initiative</label>
                <input
                        id="initiative"
                        type="text"
                        name="initiative"
                        value={character.presence + character.agility}
                        // onChange={(event) => this.handleChange(event, this.state.game)}
                        // onBlur={() => this.updateGame(this.state.game)}
                    />
                    <br/>
                <label for="dodge">Dodge</label>
                <input
                        id="dodge"
                        type="text"
                        name="dodge"
                        value={character.agility + character.wit}
                        // onChange={(event) => this.handleChange(event, this.state.game)}
                        // onBlur={() => this.updateGame(this.state.game)}
                    />
                    <br/>
                <label for="drive">Drive</label>
                <input
                        id="drive"
                        type="text"
                        name="drive"
                        value={character.wit + character.presence}
                        // onChange={(event) => this.handleChange(event, this.state.game)}
                        // onBlur={() => this.updateGame(this.state.game)}
                    />    
                </form>
            </div>
        );
    }
}

export default CharacterSheet;