import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { onSearch } = props;

  const handleRandomSearch = () => {
    const randomId = Math.floor(Math.random() * 285) + 1;
    onSearch(randomId);
  };

  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/favorites">Favorites</Link>
      <SearchBar onSearch={onSearch} />
      <button onClick={handleRandomSearch}>Random</button>
    </div>
  );
};

export default NavBar;
