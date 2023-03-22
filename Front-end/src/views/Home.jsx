
import Nav from "../components/Nav/Nav";
import { useState } from "react";
import Cards from "../components/Cards/Cards";
import SearchBar from "../components/SeachBar/SearchBar";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  function onSearch(id) {
    if (characters.find((char) => char.id === id)) {
      return window.alert("El personaje ya existe");
    }
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          // setCharacters((oldChars) => [...oldChars, data]);
          setCharacters([...characters, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  return (
    <>
      <Nav props={characters} onSearch={onSearch} />
      <SearchBar props={characters} onSearch={onSearch} / >
      <Cards characters={characters} onClose={onClose} />
    </>
  );
};

export default Home;
