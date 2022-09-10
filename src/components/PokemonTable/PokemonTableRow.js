
import { useContext } from 'react';
import { PokemonContext } from '../../utilities/PokemonContext';

function PokemonTableRow(props) {
const { pokemons, setPokemons, capturedPokemons, setCapturedPokemons } = useContext(PokemonContext);

const removePokemonFromList = (removedPokemon) =>
pokemons.filter(pokemon => pokemon !== removedPokemon)

const capture = (pokemon) => () => {
  setCapturedPokemons([...capturedPokemons], pokemon);
  setPokemons(removePokemonFromList(pokemon))
}

    return(
        <tbody>
        {pokemons.map((onepokemon, keynumber) => (
          <tr key={keynumber}>
          <td>
            {onepokemon.name.english}
          </td>
          <td>
            {onepokemon.type.join(", ")}
          </td>
          <td>
            {onepokemon.base['HP']}
          </td>
          <td>
            {onepokemon.base['Attack']}
          </td>
          <td>
            {onepokemon.base['Defense']}
          </td>
          <td>
            {onepokemon.base['Sp. Attack']}
          </td>
          <td>
            {onepokemon.base['Sp. Defense']}
          </td>
          <td>
            {onepokemon.base['Speed']}
          </td>
          { onepokemon.catchMark &&
          <td>
            <button onClick={capture(onepokemon)}>
              +
            </button>
          </td>
          }
        </tr>
        ))
        }
      </tbody>
    )
}

export default PokemonTableRow;