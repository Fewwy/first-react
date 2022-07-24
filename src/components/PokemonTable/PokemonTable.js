import Menu from '../Menu/Menu';
import PokemonTableHead from './PokemonTableHead';
import PokemonTableRow from './PokemonTableRow';

const tableHeaders = {
  name: 'Name',
  type: 'Type',
  hp: 'HP',
  attack: 'Attack',
  defence:"Defense",
  specialAttack: "Sp. Attack",
  specialDefence:"Sp. Defense",
  speed: "Speed"
}


function PokemonTable(props) {
    return (
    <>
      <Menu />
      <h1>
        Pokemon Table
      </h1>
      <table>
      <PokemonTableHead headers={tableHeaders}/>
      <PokemonTableRow pokemon={props.pokemon}/>
      </table>
    </>
  )
}

export default PokemonTable;