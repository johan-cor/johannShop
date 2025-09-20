import React from 'react'
import { Link } from 'react-router-dom'
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <Link to="/"><h1>Johan Shop</h1></Link>
        <ul className='menu'>
            <li> <Link className='menu-link' to="/">Inicio</Link></li>
            <li> <Link className='menu-link' to="/about">Nosotros</Link></li>
            <li> <Link className='menu-link' to="/">productos</Link></li>
            <li> <Link className='menu-link' to="/contact">contacto</Link></li>
            <CardWidget/>
        </ul>
    </nav>
  )
}

export default NavBar