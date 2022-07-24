function PokemonTableHead(props) {
    return (
        <thead>
        <tr>
          <th>
            {props.headers.name}
          </th>
          <th>
            {props.headers.type}
          </th>
          <th>
            {props.headers.hp}
          </th>
          <th>
            {props.headers.attack}
          </th>
          <th>
            {props.headers.defence}
          </th>
          <th>
            {props.headers.specialAttack}
          </th>
          <th>
            {props.headers.specialDefence}
          </th>
          <th>
            {props.headers.speed}
          </th>
        </tr>
      </thead>
    )
}

export default PokemonTableHead;