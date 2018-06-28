import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const CharacterForm = styled.div`
  .wrapper{
      display: grid;
      /* justify-content: center; */
      color: red;
      justify-content: space-around;
  }
  /* Character sheet head */
  .characterInfo{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap:20px;
      text-align: center;
      justify-content: space-around;
  }

  

  .attributes{
      display: grid;
      grid-template-columns: 1fr 1fr
      width: 450px;
  }

  .stats{
      display:grid;
      grid-template-columns: repeat(3, 1fr);

  }

  .editButton{
      display: grid;
      justify-content: end;
  }
  
  .test{
    display: grid;  
    border: solid red;
    grid-template-columns: 1fr 1fr
  }

  .notes{
      display:grid;
      justify-content: center;
      grid-template-rows: 1fr 4fr;
  }

  .notes h1{
      text-align:center;
  }
  textarea{
      margin-bottom: 50px;
  }
`

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

    witHolder = 0
    agilityHolder = 0
    presenceholder = 0

    handleChange = (event) => {
        console.log('hello there')
        const updatedCharacter = { ...this.state.character }
        const inputName = event.target.name
        const userInput = event.target.value


        if (inputName === 'brawn') {
            updatedCharacter['health'] = userInput * 3
        }

        if (inputName === 'presence') {
            this.presenceholder = Number(userInput)
            console.log(this.presenceholder)
            updatedCharacter['initiative'] = Number(this.presenceholder + this.agilityHolder)
            updatedCharacter['drive'] = Number(this.witHolder + this.presenceholder)
            // updatedCharacter['initiative'] = userInput + this.state.agility
        }

        if (inputName === 'agility') {
            this.agilityHolder = Number(userInput)
            console.log(this.agilityHolder)
            updatedCharacter['initiative'] = Number(this.presenceholder + this.agilityHolder)
            updatedCharacter['dodge'] = Number(this.witHolder + this.agilityHolder)
            // updatedCharacter['initiative'] = userInput + this.state.agility
        }

        if (inputName === 'wit') {
            this.witHolder = Number(userInput)
            console.log(this.witHolder)
            updatedCharacter['dodge'] = Number(this.witHolder + this.agilityHolder)
            updatedCharacter['drive'] = Number(this.witHolder + this.presenceholder)
            // updatedCharacter['initiative'] = userInput + this.state.agility
        }

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
                <CharacterForm>
                    <div className="wrapper">
                        <div className="editButton"> <button onClick={this.editMode}>Edit Character</button></div>
                        {this.state.editMode
                            ?
                            <form action="">
                                <div>
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
                                </div>
                                <hr />
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
                                <hr />
                                <br />
                                <label for="health">Health</label>
                                <input
                                    disabled
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
                                    disabled
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
                                    disabled
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
                                    disabled
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
                                <div className="characterInfo">
                                    <div><h1> pholder</h1></div>
                                    <div><h1>{character.name}</h1></div>
                                    <div><h1>{character.concept}</h1></div>
                                </div>
                                <hr />
                                <div className="test">
                                    <div className="attributes">
                                        <h1>Brawn: {character.brawn}</h1>
                                        <h1>Intelligence: {character.intelligence}</h1>
                                        <h1>Charm: {character.charm}</h1>
                                        <h1>Agility: {character.agility}</h1>
                                        <h1>Wit: {character.wit}</h1>
                                        <h1>Presence: {character.presence}</h1>
                                        
                                    </div>
                                    <div className ="notes">
                                        <h1>notes</h1>
                                        <textarea name="notepad" id="" cols="50" rows="10"></textarea>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <h1>Health: {character.health}</h1>
                                    
                                    <div className="stats">
                                    <h1>Initiative: {character.initiative}</h1>
                                    <h1>Dodge: {character.dodge}</h1>
                                    <h1>Drive: {character.drive}</h1>
                                    <hr />
                                </div>
                                </div>

                                
                            </div>
                        }
                    </div>
                </CharacterForm>
            </div>
        );
    }
}

export default CharacterSheet;