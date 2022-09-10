import { createContext, useState } from 'react';
import pokemon from '../assets/pokemon.json';

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
    const [pokemons, setPokemons] = useState(pokemon);
    const [capturedPokemons, setCapturedPokemons] = useState([])

    const providerValue = {
        pokemons,
        setPokemons,
        capturedPokemons,
        setCapturedPokemons
    }

    return (
        <PokemonContext.Provider value={providerValue}>
            {props.children}
        </PokemonContext.Provider>
    )
}