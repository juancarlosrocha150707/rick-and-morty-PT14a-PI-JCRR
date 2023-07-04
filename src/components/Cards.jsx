import style from "./Cards.module.css";
import Card from "./Card";

export default function Cards(props) {
  const { characters, onClose} = props;
  return (
    <div className={style.mainDiv}>
      {characters.map((char) => (
        <Card
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin.name}
          image={char.image}
          key={char.id}
          id={char.id}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
