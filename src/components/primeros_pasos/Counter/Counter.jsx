import React, { useState } from 'react'

const Counter = () => {

    const [number, setNumber] = useState(0)


    const sumar = () => {
        setNumber(number + 1);
        console.log(number);
    }

    return (
        <div>
            <button onClick={()=>setNumber(number-1)}>restar</button>
            {number}
            <button onClick={sumar}>Sumar</button>
        </div>
    )
}

export default Counter