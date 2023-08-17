import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";


export const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
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
      <div className={styles.card}>
      <img className={styles.img} src={character.image} alt="" />
      <div className={styles.info}>
      <h1>{character.name}</h1>
      <h1>{character.status}</h1>
      <h1>{character.species}</h1>
      <h1>{character.gender}</h1>
      <h1>{character.origin?.name}</h1>
        </div>
        </div>
    </div>
  );
};
export default Detail;
