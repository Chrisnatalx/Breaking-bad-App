import React, { useState, useEffect } from "react";

const Personajes = (props) => {
  const [listapersonajes, setListapersonajes] = useState([]);

  useEffect(() => {
    const cargaDatos = async () => {
      const personajes = await cargarListaPersonajes();
      setListapersonajes(personajes);
    };
    cargaDatos();
  }, []);

  const cargarListaPersonajes = async () => {
    try {
      const data = await fetch("https://breakingbadapi.com/api/characters");
      const personajes = await data.json();
      console.log(personajes);
      return personajes;
    } catch (err) {
      console.log(err);
    }
  };
  const seleccionar = (event) => {
    props.seleccionarPersonaje(event.target.value);
  };

  return (
    <div>
      <select onChange={seleccionar}>
        {listapersonajes.map((e) => (
          <option key={e.char_id} value={e.char_id}>
            {e.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Personajes;
