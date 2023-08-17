import React, { useEffect, useState } from "react";
import axios from "axios";
import Favorites from "./components/Favorites/Favorites";
import "./App.css";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";
import { About } from "./components/About";
import { Form } from "./components/Form";
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
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        const characterExists = characters.find((char) => char.id === data.id);
        if (characterExists) {
          window.alert("¡El personaje ya está en la lista!");
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };
  // const onSearch = async (id) => {
  //   try {
  //     const { data } = await axios.get(
  //       `http://localhost:3001/rickandmorty/character/${id}`
  //     );
  //     if (data.name) {
  //       setCharacters((oldChars) => [...oldChars, data]);
  //     } else {
  //       window.alert("¡No hay personajes con este ID!");
  //     }
  //   } catch (error) {}
  // };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  //   function login(userData) {
  //     const { email, password } = userData;
  //     const URL = 'http://localhost:3001/rickandmorty/login/';
  //     axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //        const { access } = data;
  //        setAccess(data);
  //        access && navigate('/home');
  //     });
  //  }

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    } catch (error) {
      console.log(error)
    }
  }

  const logOut = () => {
    setAccess(false);
    navigate("/");
  };

  return (
    <div className="App">
      {pathname !== "/" && <NavBar onSearch={onSearch} onLogout={logOut} />}

      <Routes>
        <Route path={"/"} element={<Form login={login} />} />
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
