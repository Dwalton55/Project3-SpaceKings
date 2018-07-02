import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import LandingPage from './components/LandingPage'
import AllGames from './components/AllGames'
import ShowGame from './components/ShowGame'
import CharacterSheet from './components/CharacterSheet'
import NewCharacter from './components/NewCharacter'
import styled from 'styled-components'

const Header = styled.div`
h1{
  font-size: 100px;
  
}

div{
  display: grid;
  justify-content: center;
  align-content: center;
  background: blue;
  font-family: cursive;
  max-height: 155px;
}
`

class App extends Component {
  state = {
      games : []
  }

  getGames = () =>{
    axios.get('/api/games').then((res) => {
      this.setState({ games: res.data.games })
    }).catch((err) => {
      console.error(err)
    })
  }

  componentDidMount () {
    this.getGames()
  }


  render() {

    const AllGamesWrapper = (props) => (
      // users is being passed down to the loginpage as a property.
      <AllGames getGames={this.getGames} games={this.state.games} {...props} />
    )

    return (
      <Router>
      <div>
        <Header>
        <div>
          <h1>Space Kings</h1>
        </div>
        </Header>
        {/* when the switch tages appear the program knows to select a route based on the url. whichever item that is will be rendered. if the url changes via links it will rerender a new route. */}
        <Switch>
          {/* exact path requries an exact path to reach. component is the basic item to say which page should be rendered. using render instead of component means that props are to be passed down. */}
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/games" render={AllGamesWrapper} />
          <Route exact path="/games/:gameId" component={ShowGame} />
          <Route exact path="/games/:gameId/characters/:charId" component={CharacterSheet} />
          <Route exact path="/games/:gameId/new" component={NewCharacter} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
