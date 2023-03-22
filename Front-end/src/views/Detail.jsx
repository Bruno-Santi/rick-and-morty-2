import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import style from './Detail.module.css'
import { Link } from "react-router-dom";
const Detail = () => {
  const id = useParams();
  const URL_BASE = 'https://rickandmortyapi.com/api/character/'
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${id.id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);
  return (
    <div>
        <Link to='/home' style={{textDecoration: 'none'}}><p className = {style.backhome}>Back Home</p></Link>
    <h3 className={style.titulo}> Rick And Morty App</h3>
      <p className={style.subtitulo}>With React</p> 
    <div className = {style.container1}>
      {character.name ? (
        <>
          <div className = {style.container2}>
          <h1 className = {style.nombre}>Name: {character.name}</h1>
          <h2 className = {style.nombre}>Status: {character.status}</h2>
          <p className = {style.nombre}>Gender: {character.gender}</p>
          <p className = {style.nombre}>Origin: {character.origin?.name}</p>
          </div>
          <div  className = {style.container3}>
          <img className = {style.img} src={character.image} alt={character.name} />
          </div>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
   
    </div>
    
    </div>
  
  );
};

export default Detail;
