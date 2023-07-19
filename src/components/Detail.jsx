import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";


export const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <div className={styles["detail-container"]}>
      <img src={character.image} alt="" />
      <h1>{character.name}</h1>
      <h1>{character.status}</h1>
      <h1>{character.species}</h1>
      <h1>{character.gender}</h1>
      <h1>{character.origin?.name}</h1>
    </div>
  );
};
export default Detail;
