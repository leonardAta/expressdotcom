import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import PersonIcon from '@material-ui/icons/Person'
import LocalMallIcon from '@material-ui/icons/LocalMall'

const Header = () => {
  return (
    <div className='header'>
      <span className='header_message'>Free Shipping on orders above $50</span>
      <img 
        className='header_logo'
        src='https://www.express.com/content/dam/logos-fonts/logos/express/express-logo.svg' 
        alt=''
      />      
      {/* <div className='header_icons'>
        <SearchIcon className='header_searchIcon' />
        <PersonIcon className='header_personIcon' />
        <LocalMallIcon className='header_localMallIcon' />
      </div> */}
      <div className='header_icons'>
        <ul>
          <li><SearchIcon className='header_searchIcon' /></li>
          <li><PersonIcon className='header_personIcon' /></li>
          <li><LocalMallIcon className='header_localMallIcon' /></li>
        </ul>

      </div>
    </div>
  )
}

export default Header
