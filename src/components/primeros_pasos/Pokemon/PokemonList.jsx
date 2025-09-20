import React, { useEffect, useState } from 'react'

const PokemonList = () => {

    const [currentList, setCurrentList] = useState({})
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=0`);
    const [next, setNext] = useState("");
    const [previous, setPrevious] = useState("");

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(result => {
                console.log(result);
                setCurrentList(result);
                setNext(result.next);
                setPrevious(result.previous)
            }
            )
    }, [url])
    
    const handleNext = ()=>{
        setUrl(next)
    }
    
    const handlePrevious = ()=>{
        previous && setUrl(previous)
    }


    return (
        <div>
            <h1>hola mundo</h1>
            {
                currentList.results ? <div>
                    {currentList.results.map(pokemon => {
                        return (
                            <div key={pokemon.name}>
                                {pokemon.name}
                            </div>
                        )
                    })
                    }
                    <button onClick={handleNext}>siguiente</button>
                    <button onClick={handlePrevious}>Anterior</button>
                </div>
                    : ""
            }
        </div>
    )
}

export default PokemonList