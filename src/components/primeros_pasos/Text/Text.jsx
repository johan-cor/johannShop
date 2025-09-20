import React, { useState } from 'react'
import Text2 from './Text2';

const Text = () => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div>
            <button onClick={handleShow}>Mostrar / Ocultar</button>
            {
                show ? (
                    <div>
                        <h2>Hola mundo</h2>
                        <Text2 />
                    </div>
                )
                    : ""
            }
            <hr />



        </div>
    )
}

export default Text