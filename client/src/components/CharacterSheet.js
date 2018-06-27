import React, { Component } from 'react';
import axios from 'axios'


class CharacterSheet extends Component {

    state = {
        character: {},
        editMode: false
    }
    //========================================
    //  State Area
    //========================================    
    getCharacter = () => {
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
    //========================================
    //  State Area
    //========================================  

    //========================================
    //           Update Function
    //========================================

    updateChar = () => {
        const gameId = this.props.match.params.gameId
        const charId = this.props.match.params.charId
        const charToUpdate = this.state.character
        axios.patch(`/api/games/${gameId}/characters/${charId}`, charToUpdate).then((res) => {

            this.setState({
                character: res.data.character
            })
            console.log(res.data)
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
        const updatedCharacter = { ...this.state.character }
        const inputName = event.target.name
        const userInput = event.target.value
        updatedCharacter[inputName] = userInput
        this.setState({ character: updatedCharacter })
    }
    //=========================================
    //         Handle Change
    //=========================================

    //=========================================
    //         Edit Toggle
    //=========================================
    editMode = () => {
        this.state.editMode ? this.setState({ editMode: false }) : this.setState({ editMode: true })
        console.log(this.state.editMode)
    }
    //=========================================
    //         Edit Toggle
    //=========================================




    render() {
        const character = this.state.character
        console.log(character.name)
        return (
            <div>
                working in CharacterSheet

                <button onClick={this.editMode}>Start a new Story</button>
                {this.state.editMode
                    ?
                <form action="">
                    <label for="name">Character Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={character.name}
                        onChange={(event) => this.handleChange(event)}
                        onBlur={() => this.updateChar(character)}
                    />
                    <br />
                    <label for="concept">Concept</label>
                    <input
                        id="concept"
                        type="text"
                        name="concept"
                        value={character.concept}
                        onChange={(event) => this.handleChange(event)}
                        onBlur={() => this.updateChar(character)}
                    />
                    <br />
                    <label for="brawn">Brawn</label>
                    <input
                        id="brawn"
                        type="text"
                        name="brawn"
                        value={character.brawn}
                        onChange={(event) => this.handleChange(event)}
                        onBlur={() => this.updateChar(character)}
                    />
                    <br />
                    <label for="intelligence">Intelligence</label>
                    <input
                        id="intelligence"
                        type="text"
                        name="intelligence"
                        value={character.intelligence}
                        onChange={(event) => this.handleChange(event)}
                        onBlur={() => this.updateChar(character)}
                    />
                    <br />
                    <label for="charm">Charm</label>
                    <input
                        id="charm"
                        type="text"
                        name="charm"
                        value={character.charm}
                        onChange={(event) => this.handleChange(event)}
                        onBlur={() => this.updateChar(character)}
                    />
                    <br />
                    <label for="agility">Agility</label>
                    <input
                        id="agility"
                        type="text"
                        name="agility"
                        value={character.agility}
                        onChange={(event) => this.handleChange(event)}
                        onBlur={() => this.updateChar(character)}
                    />
                    <br />
                    <label for="wit">Wit</label>
                    <input
                        id="wit"
                        type="text"
                        name="wit"
                        value={character.wit}
                        onChange={(event) => this.handleChange(event)}
                        onBlur={() => this.updateChar(character)}
                    />
                    <br />
                    <label for="presence">Presence</label>
                    <input
                        id="presence"
                        type="text"
                        name="presence"
                        value={character.presence}
                        onChange={(event) => this.handleChange(event)}
                        onBlur={() => this.updateChar(character)}
                    />
                    <br />
                    <label for="health">Health</label>
                    <input
                        id="health"
                        type="text"
                        name="health"
                        value={character.health}
                        onChange={(event) => this.handleChange(event)}
                        onBlur={() => this.updateChar(character)}
                    />
                    <br />
                    <label for="initiative">Initiative</label>
                    <input
                        id="initiative"
                        type="text"
                        name="initiative"
                        value={character.initiative}
                        onChange={(event) => this.handleChange(event)}
                        onBlur={() => this.updateChar(character)}
                    />
                    <br />
                    <label for="dodge">Dodge</label>
                    <input
                        id="dodge"
                        type="text"
                        name="dodge"
                        value={character.dodge}
                        onChange={(event) => this.handleChange(event)}
                        onBlur={() => this.updateChar(character)}
                    />
                    <br />
                    <label for="drive">Drive</label>
                    <input
                        id="drive"
                        type="text"
                        name="drive"
                        value={character.drive}
                        onChange={(event) => this.handleChange(event)}
                        onBlur={() => this.updateChar(character)}
                    />
                </form>
                : 
                <div>
                    <h1>{character.name}</h1>
                    <h1>{character.concept}</h1>
                    <h1>{character.brawn}</h1>
                    <h1>{character.intelligence}</h1>
                    <h1>{character.charm}</h1>
                    <h1>{character.agility}</h1>
                    <h1>{character.wit}</h1>
                    <h1>{character.presence}</h1>
                    <h1>{character.health}</h1>
                    <h1>{character.initiative}</h1>
                    <h1>{character.dodge}</h1>
                    <h1>{character.drive}</h1>
                </div>
                }
            </div>
        );
    }
}

export default CharacterSheet;