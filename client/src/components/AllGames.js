import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Page = styled.div`
div{
    display: grid;
    justify-content: center;
    align-items: center

}

.game{ 
    
}

.gameArea{
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    background: grey;
    height:50vh;
    width:90vh;
    /* make into a robot head? */
}

form{
    width: 1005px;
    height: 122px;
    display: grid;
}
form input{
    heigh: 75%;
}
`


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
            <Page>
                <div> {/* wrapper start*/}

                    <button onClick={this.showForm}>Start a new Story</button>
                    {this.state.newForm
                        ?
                        <div className="game">
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
                                        <Link to={`/games/${game._id}`}>{game.title}</Link>
                                        <p>{game.description}</p>

                                    </div>
                                    <br />
                                </div>
                            )
                        })} 

                    </div>
                </div>
            </Page>
        );
    }
}

export default AllGames;