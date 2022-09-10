import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PokemonTable from './components/PokemonTable/PokemonTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PokemonProvider } from './utilities/PokemonContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/first-react'>
    <PokemonProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemontable" element={<PokemonTable />}/>
      </Routes>
    </PokemonProvider>
  </BrowserRouter>
);