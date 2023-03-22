import Card from "../Card/Card";
import style from '../Cards/Cards.module.css'
export default function Cards({characters, onClose}) {


  return (
    <div>
      {characters.map(({ name, species, gender, image, id }) => {
        
        return (
          <Card
          keys={id}
          id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
          
        ) ; 
      })}
    </div>
  );
}

