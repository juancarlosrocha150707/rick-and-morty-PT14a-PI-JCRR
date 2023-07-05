import { Link } from "react-router-dom";
import style from "./Card.module.css";
export default function Card(props) {
  const { name, status, species, gender, origin, image, onClose, id} = props;
  return (
    <div className={style.wrapperCard}>
      <button className={style.btn} onClick={() => {onClose(id)}}>
        X
      </button>
      <img src={image} alt="character" />
      <Link to={`/detail/${id}`}>
        <h2 className={style.name}>{name}</h2>
        </Link>
      <div>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin.name}</h2>
      </div>
    </div>
  );
}
