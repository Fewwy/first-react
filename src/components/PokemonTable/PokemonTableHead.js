function PokemonTableHead(props){
    console.log(props)
    return (
        <thead>
        <tr>
          <th>
            {props.name}
          </th>
          <th>
            {props.type}
          </th>
        </tr>
      </thead>
    )
}

export default PokemonTableHead