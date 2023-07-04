import React from "react";
import SearchBar from "./SearchBar";
// import style from "./NavBar.modules.css";
const NavBar = (props) => {
  const {onSearch} = props;
  return <div>
    <SearchBar onSearch = {onSearch}/>
  </div>;
}
export default NavBar;


