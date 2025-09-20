import React, { useState } from 'react'

const Contacto = () => {


    // * forma básica de manejar los un formulario, se puede conplicar si el formulario cuenta con muchos inpus dentro de se formulario

    // const [nombre, setNombre] = useState("")
    // const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Holaa", valores);
    }

    // const handleNombre = (e) => {
    //     setNombre(e.target.value);
    // }

    // const handleEmail = (e) => {
    //     setEmail(e.target.value);
    // }

    const [valores, setValores] = useState({
        nombre: "",
        email: ""
    })

    const handleValores = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='contact_container'>
            <h1 className='contact-title'>Contacto</h1>
            <form action="" className='contact-form' onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id='nombre'
                    name='nombre'
                    required
                    value={valores.nombre}
                    onChange={handleValores}
                    placeholder='Ingresa tu nombre' />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id='email'
                    name='email'
                    required
                    value={valores.email}
                    onChange={handleValores}
                    placeholder='Ingresa tu emain' />
                <button type="submit" className='form-submit_button'>Enviar</button>
            </form>
        </div>
    )
}

export default Contacto