import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
class AllGames extends Component {

    state = {
        title: '',
        description: '',
        newForm: false
    }

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

    showForm = () => {
        this.state.newForm ? this.setState({ newForm: false }) : this.setState({ newForm: true })
        console.log(this.state.newForm)
    }
    render() {
        return (
            <div> {/* wrapper start*/}

             <button onClick={this.showForm}>Start a new Story</button>
                {this.state.newForm
                    ?
                <div>
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
                        {/* activates the handle Submit */}
                        <button type="submit">Submit</button>
                    </form>

                    <textarea rows="7" cols="50" name="description" placeholder="description here" onChange={this.handleChange} value={this.state.description}></textarea>
                </div>
                    : null}
                    <br/>
                    <br/>
                    <br/>
                {this.props.games.map((game) => { /* map start*/
                    return (
                        <div key={game._id}>
                            <Link to={`/games/${game._id}`}>{game.title}</Link>
                            <p>{game.description}</p>
                        </div>
                    )
                })} {/* map end*/}
                {/* wrapper end*/}
            </div>
        );
    }
}

export default AllGames;