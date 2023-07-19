import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = (props) => {
  const { onSearch } = props;

  const handleRandomSearch = () => {
    const randomId = Math.floor(Math.random() * 285) + 1;
    onSearch(randomId);
  };

  return (
    <div className={style.container}>
      <Link to="/home" className={`${style["navbar-link"]} ${style["neon-link"]}`}>Home</Link>
      <Link to="/about" className={`${style["navbar-link"]} ${style["neon-link"]}`}>About</Link>
      <Link to="/favorites" className={`${style["navbar-link"]} ${style["neon-link"]}`}>Favorites</Link>
      <SearchBar onSearch={onSearch} />
      <button onClick={handleRandomSearch} className={`${style.button} ${style["neon-button"]}`}>Random</button>
    </div>
  );
};

export default NavBar;
