import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../Card";
import { filterCards, orderCards } from "../../redux/actions";
import "./Favorites.module.css";
import style from "./Favorites.module.css";


const Favorites = (props) => {
  const { myFavorites } = props;
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className={style.container}>
      <div className="select-wrapper">
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Gender">Gender</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={style.cardContainer}>
        {myFavorites.map((char) => {
          return (
            <Card
              name={char.name}
              status={char.status}
              species={char.species}
              gender={char.gender}
              origin={char.origin?.name}
              image={char.image}
              key={char.id}
              id={char.id}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
