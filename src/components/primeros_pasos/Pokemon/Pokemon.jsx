import React, { useEffect, useState } from 'react'

const Pokemon = () => {

    const [pokemon, setPokemon] = useState()
    const [id, setId] = useState(1)


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPokemon(data);
            })
    }, [id])





    return (
        <div>
            {
                pokemon && <div>
                    <h2>{pokemon.name}</h2>
                    <p>{pokemon.id}</p>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <button onClick={() => setId(id + 1)}>Siguiente</button>
                    {
                        id > 1
                            ? <button onClick={() => { id < 2 ? "" : setId(id - 1) }}  >Anterior </button>
                            : <button disabled >Anterior </button>

                    }
                </div>
            }
        </div>
    )
}

export default Pokemon