import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


const Page = styled.div`
 .showwrapper{
    
     height: 50vh;
 }

div{
    display:grid;
    justify-content: center;
    align-items:center;
}

.characterDiv{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:30px;
    width: 100%;
    justify-content: center;
    align-items:center;
}

.characterDiv div{
    display:grid;
    background: lightgrey;
    justify-content: center;
    align-items: center;
    grid-template-rows: 1fr 1fr 1fr;
}

.characterDiv div button{
    justify-self:center;
    width: 50%;
}

.characterDiv div h1{
    justify-self:center;
    padding:10px;
    width: 50%;
}

.showheader{
    text-align: center;
    width: 100%;
    font-size: 4.5vh;
}

.showheader p{
    font-size:3.5;
}

a{
    text-decoration:none;
    color: limegreen;
    font-size:50px;
    text-align: center;
}
a.button{
    
}

h1{
    text-align: center;
}
`

class ShowGame extends Component {
    //==============================
    //          State area
    //==============================

    state = {
        game: {},
        characters: [],
        redirect: false,
        editForm: false
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
    // ========================================
    // switch form
    // ========================================    
    showForm = () => {
        this.state.editForm ? this.setState({ editForm: false }) : this.setState({ editForm: true })
        console.log(this.state.editForm)
    }
    // ========================================
    // switch form
    // ======================================== 
    render() {
        if (this.state.redirect) {
            return <Redirect push to={`/games`} />
        }
        return (
            <Page>
            <div className="showwrapper">
                
                {this.state.editForm ?
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
                </div>
                :
                    <div className="showheader">
                <h1> {this.state.game.title}</h1>
                <p> {this.state.game.description} </p>
                </div> }
               

                    <div className="characterDiv">
                {this.state.characters.map((character) => {
                    return (
                        <div key={character._id}>
                             <Link to={`/games/${this.state.game._id}/characters/${character._id}`}>{character.name}</Link>
                            <h1>{character.concept}</h1>
                            <button onClick={() => this.deleteChar(character._id)}>Delete this character</button>
                        </div>
                    )
                })}
                </div>
                <div>
                    <Link to={`/games/${this.state.game._id}/new`}><button>Create a new character</button></Link>
                    <Link to={`/games/`}><button>Back to select</button></Link>
                </div>
                <button onClick={this.showForm}>Edit Game</button>
            </div>
            </Page>
        );
    }
}

export default ShowGame;