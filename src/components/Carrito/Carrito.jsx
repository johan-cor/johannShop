import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
        <div className='carrito-container'>
            <h1 className='carrito-title'>Carrito</h1>
            {
                carrito.map(prod => (
                    <div key={prod.id}>
                        <img src={prod.image} alt={prod.title} />
                        <div className='producto_info'>
                            <h4>{prod.title}</h4>
                            <p>Precio: ${prod.price}</p>
                            <p>descripción: {prod.description}</p>
                            <p>categoría: <Link to={`/products/${prod.category}`}>{prod.category}</Link></p>
                            <p>cantidad: {prod.cantidad}</p>
                            <p>Precio total: ${Math.round(prod.cantidad * prod.price)}</p>
                            <button className='ver-mas'>
                                <Link className='var-mas_link' to={`/item/${prod.id}`} >Ver más</Link>
                            </button>
                        </div>
                    </div>
                ))
            }
            {
                (precioTotal() > 0) ? (
                    <>
                        <h2>{`Precio total ${precioTotal()}`}</h2>
                        <button onClick={handleVaciar}>Vaciar</button>
                        <Link to="/Checkout">Finalizar compra</Link>
                    </>
                ): <h3>El carrito esta vació</h3>
            }


        </div>
    )
}

export default Carrito