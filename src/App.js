import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Nav from './Nav'
import Home from './Home'
import SignIn from './SignIn'
import Bag from './Bag'
import Purchases from './Purchases'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Paymentt from './Paymentt';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51JCsRPHi6RLfVyuzUksc9y12PEtonqM65Nw9DBQpRNaax96XZ1YFSttVgoQI9TmvzWrC2DSWjPxM2i9J3SSdP8Em00qstXOqBT')

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The User is ', authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])


  return (
    <Router>
        <div className="app">
        <Switch>
          <Route path='/purchases'>
            <Header />
            <Purchases />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/bag'>
            <Header />
            <Bag />
          </Route>
          <Route path='/paymentt'>
            <Header />
            <Elements stripe={promise}>
            <Paymentt />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
