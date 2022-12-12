import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/Context";
import img from "../images/doctor.jpg"
import styles from "../Sass/Components/Card.module.scss"

const Card = ({ name, username, id }) => {

  const {dispatchFavs, stateFavs, isDarkMode} = useContextGlobal()

  function validarId(id){
   let resulter = stateFavs.find((item) =>{
    return item.id === id
   })
   return resulter? resulter : null
  }

  const addFav = ()=>{
    
    // Aqui iria la logica para agregar la Card en el localStorage
    const payload = {
      name: name,
      id: id,
      username: username
    }
    validarId(id)? alert("Ese dentista ya esta en favs") : dispatchFavs({type: 'ADD_FAVS', payload: payload})
  }


  return (
    <div className={`${styles.card} ${isDarkMode? styles.dark : styles.light}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src={img} alt="img"/>
      <Link to={`/dentist/${id}`}>
        <div>
          <h3>{name}</h3>
          <p>{username}</p>
        </div>
      </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
      </div>
  );
};

export default Card;
