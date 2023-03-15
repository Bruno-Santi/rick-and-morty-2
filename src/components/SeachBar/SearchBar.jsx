import React, { useState } from "react";
import style from './SearchBar.module.css'
function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div className = {style.container}>
      <input className = {style.input} onChange={handleChange} placeholder = 'ID for search...' />
      <button className = {style.myButton} onClick={() => onSearch(id)}>Agregar</button>
      <p className={style.texto}>Click on name to see details.</p>
    </div>
  );
}

export default SearchBar;
