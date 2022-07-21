import Menu from '../Menu/Menu';
import PokemonTableHead from './PokemonTableHead';
import PokemonTableRow from './PokemonTableRow';


function PokemonTable() {
    return (
    <>
      <h1>
        Pokemon Table
      </h1>
      <Menu />
      <table>
      <PokemonTableHead name='Name' type='Type'/>
      <PokemonTableRow />
      </table>
    </>
  )
}

export default PokemonTable;