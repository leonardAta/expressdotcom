import React, { useState } from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'
import { auth } from './firebase'


const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
          <input type='text' value={email} />

          <h4>Password</h4>
          <input type='password' value={password} />

          <button type='submit' className='signinButton'>Sign In</button>
        </form> 
        <button className='signupButton'>Create an Express Account</button>
      </div>  
     
    </div>


  )
}

export default SignIn
