import React, { useState } from 'react'

const ItemCount = ({cantidad, handleAgregar,handleRestar,handleSumar }) => {
   

    return (
        <div className='itemcount'>
            <div className='item-count_botton'>
                <button onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button className='agregar-carrito' onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount