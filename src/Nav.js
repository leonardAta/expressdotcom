import React from 'react'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <div className='nav'>
      <a href='#'>WOMEN</a>
      <a href='#'>MEN</a>
      <a href='#'>JEANS</a>
      <a href='#'>NEW</a>
      <a href='#'>SALE</a>
      <a href='#'>STYLE TRIAL RENTAL</a>
      <a href='#'>SERVICES</a>
      <a href='#'>LABELS WE LOVE</a>
      <a href='#'>EXPRESS OUTLET</a>
      {/* <a><i class="fas fa-bars"></i></a> */}
      <FontAwesomeIcon icon={faBars} />      
    </div>
  )
}

export default Nav
