//Commons import
import { useEffect, useState } from "react";
import axios from "axios";
import Favorites from "./components/Favorites/Favorites";
//Css
import "./App.css";
//Components
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";
import { About } from "./components/About";
import { Form } from "./components/Form";
//Router-Dom
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { PathRoutes } from "./components/Helpers/Routes.helper";
import Detail from "./components/Detail.jsx";

const EMAIL = "juan@gmail.com";
const PASSWORD = "1234567";

function App() {
  const [characters, setCharacters] = useState([]);

  const { pathname } = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);
  

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

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  return (
    <div className="App">
      {pathname !== "/" && <NavBar onSearch={onSearch} />}

      <Routes>
        <Route path={"/"} element={<Form login={login}/>} />
        <Route
          path={PathRoutes.HOME}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path={PathRoutes.ABOUT} element={<About />} />
        <Route path={PathRoutes.DETAIL} element={<Detail />} />
        <Route path={"/favorites"} element={<Favorites />} />
      </Routes>
    </div>
  );
}



export default App;
