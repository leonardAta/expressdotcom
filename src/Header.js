import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import PersonIcon from '@material-ui/icons/Person'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

const Header = () => {
  const [{ cart }, dispatch] = useStateValue()


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
          {/* <ul>
            <li><SearchIcon className='header_searchIcon' /></li>
            <li><PersonIcon className='header_personIcon' /></li>
            <li><LocalMallIcon className='header_localMallIcon' /></li>
          </ul> */}
          <LocalMallIcon className='header_localMallIcon' />
          <span className='header_localMallIcon'>{cart.length}</span>
        </div>
      </Link>
      
      <Link to='/signin'>
        <div className='header_icons'>
          <SearchIcon />
          <span className='header_searchIcon'></span>
        </div>
      </Link>
      <div className='header_icons'>
        <PersonIcon />
        <span className='header_personIcon'>Sign In</span>
      </div>
    </div>
  )
}

export default Header
