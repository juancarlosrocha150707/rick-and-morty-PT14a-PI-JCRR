import { useState } from "react";
import style from "./SearchBar.module.css";
export default function SearchBar(props) {
  const { onSearch } = props;
  const [id, setId] = useState();
  const handleChange = (e) => {
    setId(e.target.value);
  };
  return (
    <div className={style.wrapperSearch}>
      <input className={style.input} type="search" onChange={handleChange} value={id}/>
      <button className={style.btn} onClick={() => {onSearch(id)}}>
        🔍
      </button>
    </div>
  );
}
