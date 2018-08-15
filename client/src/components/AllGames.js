import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled, { css } from 'styled-components'
import './AllGames.css'



class AllGames extends Component {

    //==============================
    //          State area
    //==============================

    state = {
        title: '',
        description: '',
        newForm: false
    }
    //==============================
    // State area
    //==============================

    //==============================
    //          Create New
    //==============================
    handleChange = (event) => {
        const inputToTarget = event.target.name
        const userInput = event.target.value

        const newState = { ...this.state }
        newState[inputToTarget] = userInput
        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/games', this.state).then((res) => {
            this.props.history.push(`/games/`)
            this.props.getGames()
        })
    }

    //==============================
    //          Create New
    //==============================

    //==============toggle edit=====
    showForm = () => {
        this.state.newForm ? this.setState({ newForm: false }) : this.setState({ newForm: true })
        console.log(this.state.newForm)
    }
    //==============toggle edit=====

    render() {
        return (
            <div>
                <div className = 'allgameswrapper'> {/* wrapper start*/}

                    <div className='imageholder'></div>

                    {this.state.newForm
                        ?
                        <div className='formholder'> 
                            {/* creates a form and says that once submitted handleSubmit should run */}
                            <form onSubmit={this.handleSubmit} id="newgame">
                                <input
                                    placeholder="Title"
                                    type="text"
                                    name="title"
                                    // sets value to be the State user name.
                                    value={this.state.title}
                                    // when value is changed it runs handle change
                                    onChange={this.handleChange}
                                />
                                <textarea rows="7" cols="50" name="description" placeholder="description here" onChange={this.handleChange} value={this.state.description}></textarea>
                                {/* activates the handle Submit */}
                                <button type="submit">Submit</button>
                            </form>
                           

                            
                        </div>
                        : null}
                    <br />
                    <br />
                    <br />
                    <div className="gameArea">
                        {this.props.games.map((game) => { /* map start*/
                            return (
                                <div>
                                    <div key={game._id} className="game">
                                        <Link to={`/games/${game._id}`}><h1>{game.title}</h1></Link>
                                        <p>{game.description}</p>

                                    </div>
                                    <br />
                                </div>
                            )
                        })} 

                    </div>
                </div>
                <button  className='allgamesbutton' onClick={this.showForm}>Start a new Story</button>
            </div>
        );
    }
}

export default AllGames;