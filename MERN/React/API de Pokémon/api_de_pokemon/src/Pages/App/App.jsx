import React, { useState } from 'react';
import './App.css';

function App() {
  const [pokemonNames, setPokemonNames] = useState([]);

  const fetchAllPokemonNames = async () => {
    try {
      let allPokemonNames = [];
      let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let data = await response.json();
      let pokemonData = data.results.map(pokemon => capitalizeFirstLetter(pokemon.name));
      allPokemonNames.push(...pokemonData);

      setPokemonNames(allPokemonNames);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div className='container'>
        <button className='btn' onClick={fetchAllPokemonNames}>Fetch Pokemon</button>
      </div>
      <div className='pokes'>
        <ul>
          {pokemonNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;