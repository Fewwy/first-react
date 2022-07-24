import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PokemonTable from './components/PokemonTable/PokemonTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import pokemon from './assets/pokemon.json'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/first-react'>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemontable" element={<PokemonTable pokemon={pokemon}/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
