import React, { Component } from 'react'
import Header from './Components/Header'
import Home from './Pages/Home'
import NewItems from './Pages/NewItems'
import About from './Pages/About'

import './App.css'

import { Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/NewItems" component={NewItems} />
        <Route path="/about" component={About} />
      </div>
      )
  }
}

export default App