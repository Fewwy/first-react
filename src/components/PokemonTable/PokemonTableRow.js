
function PokemonTableRow(props) {
    return(
        <tbody>
        {props.pokemon.map((onepokemon, keynumber) => (
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

        </tr>
        ))
        }
      </tbody>
    )
}

export default PokemonTableRow;