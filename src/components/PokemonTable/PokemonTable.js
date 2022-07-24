import Menu from '../Menu/Menu';
import PokemonTableHead from './PokemonTableHead';
import PokemonTableRow from './PokemonTableRow';
import pokemonTableHeaders from "../../utilities/constants";

function PokemonTable(props) {
    return (
    <>
      <h1>
        Pokemon Table
      </h1>
      <Menu />
      <table>
        <PokemonTableHead headers={pokemonTableHeaders}/>
        <PokemonTableRow pokemon={props.pokemon}/>
      </table>
    </>
  )
}

export default PokemonTable;