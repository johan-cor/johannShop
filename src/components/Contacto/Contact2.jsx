import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Contacto2 = () => {

    const { register, handleSubmit } = useForm()


    const enviar = (data) => {
        console.log("enviar", data);
    }

    return (
        <div className='contact_container'>
            <h1 className='contact-title'>Contacto</h1>
            <form action="" className='contact-form' onSubmit={handleSubmit(enviar)}>
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
                <button type="submit" className='form-submit_button'>Enviar</button>
            </form>
        </div>
    )
}

export default Contacto2