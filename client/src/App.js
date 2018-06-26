import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
      games : []
  }

  componentDidMount () {
   
    axios.get('/api/games').then((res) => {
      this.setState({ games: res.data.games })
    }).catch((err) => {
      console.error(err)
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
