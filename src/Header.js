import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import PersonIcon from '@material-ui/icons/Person'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from "./firebase";

const Header = () => {
  const [{ cart, user }, dispatch] = useStateValue()

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }


  return (
    <div className='header'>

      <span className='header_message'>Free Shipping on orders above $50</span>
      <Link to='/'>
        <img 
          className='header_logo'
          src='https://www.express.com/content/dam/logos-fonts/logos/express/express-logo.svg' 
          alt=''
        /> 
      </Link>     
      {/* <div className='header_icons'>
        <SearchIcon className='header_searchIcon' />
        <PersonIcon className='header_personIcon' />
        <LocalMallIcon className='header_localMallIcon' />
      </div> */}
      <Link to='/bag'>
        <div className='header_icons'>
          <LocalMallIcon className='header_localMallIcon' />
          <span className='header_localMallIcon'>{cart.length}</span>
        </div>
      </Link>

        <Link to='/purchases'>
          <div className='line1'>
            <span>Purchases</span>
          </div>
        </Link>
      
        <div className='header_icons'>
          <SearchIcon />
          <span className='line1'>Hi {user ? user.email : 'Guest'}</span>
        </div>
      
      <Link to={!user &&  '/signin'}>
      <div onClick={handleAuthenticaton } className='header_icons'>
        <PersonIcon className='header_personIcon' />
        <span className='line1'>{user ? 'Sign Out' : 'Sign In' }</span>
      </div>
      </Link>
    </div>
  )
}

export default Header
