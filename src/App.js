import logo from './logo.svg';
import './App.css';
import pokemon from './pokemon.json'

console.log(pokemon)
//structure pokemon = [{-},{-},{-}]
//pokemon.map((onepokemon) => HTML?????)

function App() {
  return (
    <div>
      <h1>
        Pokemon Table
      </h1>
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
    </div>
  );
}

export default App;
