//Commons import 
import { useState } from "react";
import axios from "axios";
//CSS
import "./App.css";
//Components
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";
// import SearchBar from './components/SearchBar.jsx';
// import characters, { } from './data.js';
// import Card from './components/Card.jsx';

function App() {
  // const example = {
  //    id: 1,
  //    name: 'Rick Sanchez',
  //    status: 'Alive',
  //    species: 'Human',
  //    gender: 'Male',
  //    origin: {
  //       name: 'Earth (C-137)',
  //       url: 'https://rickandmortyapi.com/api/location/1',
  //    },
  //    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  // };

  const [characters, setCharacters] = useState([]);

  //aqui estoy

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }
const onClose = (id) =>{
  // const charactersFiltered = characters.filter((char) => char.id !== id)
  setCharacters(characters.filter((char) => char.id !== Number(id)))
}
  return (
    <div className="App">
      |
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      <NavBar onSearch={onSearch} />
      <Cards characters={characters} onClose = {onClose}/>
      {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
    </div>
  );
}

export default App;
