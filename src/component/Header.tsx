import React from 'react'
import { Link } from 'react-router-dom'

const Header =()=> {
  return (
    <header> 
    <div > Menu</div>
    <Link to={'/login'}>Acceder</Link>
    <Link to={'/registro'}>Registarse</Link>
  </header>
  )
}

export default Header