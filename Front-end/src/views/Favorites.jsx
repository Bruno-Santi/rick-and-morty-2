import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import Nav from "../components/Nav/Nav";
const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  return (
    <>
    <Nav />
    <h1 style={{textAlign:'center', color:'beige'}}>Your favorites characters:</h1>
      {myFavorites.map(({ id, name, species, gender, image}) => (
        <Card
          key={id}
          id={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
        />
      ))}
    </>
  );
  
}

export default Favorites;
