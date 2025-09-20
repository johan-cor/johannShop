import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CardWidget = () => {
    const { cantidadCarrito } = useContext(CartContext)
    return (
        <div>
            <Link className='menu-link' to="/card">Carrito</Link>
            <span className='numerito'>
                {cantidadCarrito()}
            </span>
        </div>
    )
}

export default CardWidget