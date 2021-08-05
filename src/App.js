import React from 'react'
import './App.css';
import Header from './Header';
import Nav from './Nav'
import Home from './Home'
import SignIn from './SignIn'
import Bag from './Bag'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
        <div className="app">
          <Switch>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/bag'>
            <Header />
            <Bag />

          </Route>
          <Route path='/'>
            <Header />
            <Nav />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
