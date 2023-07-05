//Commons import
import { useState } from "react";
import axios from "axios";
//Css
import "./App.css";
//Components
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";
import { About } from "./components/About";
//Router-Dom
import { Routes, Route } from "react-router-dom";
import { PathRoutes } from "./components/Helpers/Routes.helper";
import Detail from "./components/Detail.jsx";



function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          const characterExists = characters.find(
            (char) => char.id === data.id
          );
          if (characterExists) {
            window.alert("¡El personaje ya está en la lista!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  return (
    // <div className="App">
    //   <NavBar onSearch={onSearch} />
    //   <Cards characters={characters} onClose={onClose} />
    // </div>

    <div className="App">
      <NavBar onSearch={onSearch} />
      <Routes>
        <Route path={PathRoutes.HOME} element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path={PathRoutes.ABOUT} element={<About />}/>
        <Route path={PathRoutes.DETAIL} element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
