import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ producto }) => {
    return (
        <div className={`producto`}>
            <img src={producto.image} alt={producto.title} />
            <div className='producto_info'>
                <h4>{producto.title}</h4>
                <p>Precio: ${producto.price}</p>
                <p>descripción: {producto.description}</p>
                <p>categoría: <Link to={`/products/${producto.category}`}>{producto.category}</Link></p>
                <button className='ver-mas'>
                    <Link className='var-mas_link' to={`/item/${producto.id}`} >Ver más</Link>
                </button>

            </div>
        </div>
    )
}
