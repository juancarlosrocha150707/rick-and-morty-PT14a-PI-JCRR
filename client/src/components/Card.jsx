import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { addFav, removeFav } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

function Card(props) {
  const {
    name,
    image,
    onClose,
    id,
  } = props;

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);
 

  useEffect(() => {
    if (myFavorites.find((character) => character.id === id)) {
      setIsFav(true);
    }
    //eslint-disable-next-line
  }, [myFavorites]);

  const handleFavorite = () => {
    const action = isFav ? removeFav(id) : addFav(props);
    dispatch(action);
    setIsFav(!isFav);
  };

  return (
    <div className={style.wrapperCard}>
      <button className={style.heartButton} onClick={handleFavorite}>
        {isFav ? "❤️" : "🤍"}
      </button>
      <button
        className={style.btn}
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </button>
      <img src={image} alt="character" />
      <div className={style.nameContainer}>
        <Link to={`/detail/${id}`}>
          <h2 className={style.name}>{name}</h2>
        </Link>
      </div>
    </div>
  );
}

export default Card;
