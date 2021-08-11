import React, { useState } from 'react'
import './SignIn.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'


const SignIn = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = e => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //console.log(auth)
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        if (auth) {
          //console.log(auth)
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className='signin'>
      <Link to='/'>
        <img 
          className='signin_logo'
          src='https://www.express.com/content/dam/logos-fonts/logos/express/express-logo.svg' 
          alt='' />  
      </Link> 

      <div className='signin_box'>
        <h1>Sign In</h1>

        <form>
          <h4>E-mail</h4>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <h4>Password</h4>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' onClick={signIn} className='signinButton'>Sign In</button>
        </form> 
        <button onClick={register} className='signupButton'>Create an Express Account</button>
      </div>  
     
    </div>


  )
}

export default SignIn
