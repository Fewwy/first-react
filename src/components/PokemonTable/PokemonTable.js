import pokemon from '../../assets/pokemon.json'
import Menu from '../Menu/Menu';

function PokemonTable() {
    return (
    <>
      <h1>
        Pokemon Table
      </h1>
      <Menu />
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          {/* переключаемся на JS */}
          {pokemon.map((onepokemon) => (
            //это уже HTML
            <tr>
            <td>
              {/* мы снова переключаемся на JS */}
              {onepokemon.name.english}
            </td>
            <td>
              {/* мы снова переключаемся на JS */}
              {onepokemon.type.join(", ")}
            </td>
          </tr>
          ))
          }
        </tbody>
      </table>
    </>
  )
}

export default PokemonTable;