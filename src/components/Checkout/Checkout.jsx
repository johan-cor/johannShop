import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from "react-hook-form";
import { pedidosRef } from '../../helper/postFirebase';

const Checkout = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const [pedidoId, setPedidoId] = useState()

    const handleVaciar = () => {
        vaciarCarrito()
    }

    const { register, handleSubmit } = useForm()


    const comprar = (data) => {

        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()

        }

        pedidosRef(pedido).then(res => {
            setPedidoId(res.id)
            vaciarCarrito();
        })

    }

    if(pedidoId){
        return(
            <div className='container'>
                <h1>Muchas gracias por tu compra</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }



    return (
        <div className='contact_container'>
            <h1 className='contact-title'>Finalizar compra</h1>
            <form action="" className='contact-form' onSubmit={handleSubmit(comprar)}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    required
                    placeholder='Ingresa tu nombre'
                    {...register("nombre")}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    required
                    placeholder='Ingresa tu emain'
                    {...register("email")}
                />
                <button type="submit" className='form-submit_button'>Comprar</button>
            </form>
        </div>
    )
}

export default Checkout