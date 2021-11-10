import { useState } from "react";
import "./App.css";
import Personajes from "./components/Personajes";
import Ficha from "./components/Ficha";
function App() {
  const [personajeId, setPersonajeId] = useState("");

  const seleccionarPersonaje = (id) => {
    setPersonajeId(id);
    console.log(personajeId);
  };
  return (
    <div className="App">
      <h1>Breaking Bad Api</h1>
      <Personajes seleccionarPersonaje={seleccionarPersonaje}></Personajes>
      <Ficha id={personajeId}></Ficha>
    </div>
  );
}

export default App;
