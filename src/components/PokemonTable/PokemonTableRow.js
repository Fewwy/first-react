import pokemon from '../../assets/pokemon.json'

function PokemonTableRow() {
    return (
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
    )
}

export default PokemonTableRow;