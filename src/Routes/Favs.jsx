import { getFavsFromStorage} from "../Components/utils/LocalStorage"
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/Context";
import styles from "../Sass/Favs.module.scss"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favs = getFavsFromStorage()

  const {isDarkMode} = useContextGlobal()

  // function handleClick(){
  //   dispatchFavs({type: 'REMOVE_ALL', payload:[]})
  //   setFavsInStorage(stateFavs)
  // }

  return (
    <div className={`${styles.favs} ${isDarkMode? styles.dark : styles.light}`}>
      <h1>Dentists Favs</h1>
      <div className={styles.container}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs?.map(item => <Card key={item.id}id={item.id} name={item.name} username={item.username}/>)}
      </div>
      {/* <button onClick={handleClick}>Reset</button> */}
    </div>
  );
};

export default Favs;
