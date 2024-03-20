import React, { useState } from 'react';
import './Inf.css'

function Informacion({ elResultado, elError }) {
  const [opcion, setOpcion] = useState('people');
  const [busquedaId, setBusquedaID] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const repuesta = await fetch(`https://swapi.py4e.com/api/${opcion}/${busquedaId}/`);
      if (repuesta.ok) {
        const datos = await repuesta.json();

        elResultado(datos);
      } else {
        elError();
      }
    } catch (error) {
      elError();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Buscar: </label>
      <select value={opcion} onChange={(event) => setOpcion(event.target.value)}>
        <option value="people">Personajes</option>
        <option value="films">Películas</option>
        <option value="starships">Naves</option>
        <option value="vehicles">Vehículos</option>
        <option value="species">Especies</option>
        <option value="planets">Planetas</option>
      </select>
      <label>ID: </label>
      <input
        type="number"
        placeholder=" ID"
        value={busquedaId}
        onChange={(event) => setBusquedaID(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Informacion;