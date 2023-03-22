import { Link } from "react-router-dom";
import style from "../Card/Card.module.css";
import { addCharacters, removeCharacter } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
//
export default function Card({ id, name, species, gender, image, onClose }) {
  const [isFav, setFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const addChar = () => {
    dispatch(addCharacters({ id, name, species, gender, image }));
  };
  const removeChar = () => {
    dispatch(removeCharacter(id));
  };
  const handleFavorite = () => {
    if (isFav === true) {
      setFav(false);
      removeChar();
    } else {
      setFav(true);
      addChar();
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  }, [myFavorites, id]);
  return (
    <div className={style.container}>
      <div className={style.contenedor}>
      {isFav ? (
          <button className={style.emojiButton} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={style.emojiButton} onClick={handleFavorite}>
            🤍
          </button>
        )}
        <button onClick={() => onClose(id)}> Close </button>
        <Link to={`detail/${id}`} style={{ textDecoration: "none" }}>
          <h2 className={style.name}>{name}</h2>
        </Link>
        <img className={style.img} src={image} alt="" />
        <h2 className={style.datos}>Species: {species}</h2>
        <h2 className={style.datos}>Gender: {gender}</h2>

      </div>
    </div>
  );
}
