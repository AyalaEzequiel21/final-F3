import { getFavsFromStorage} from "../Components/utils/LocalStorage"
import Card from "../Components/Card";
// import { useContextGlobal } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favs = getFavsFromStorage()

  // const {dispatchFavs, stateFavs} = useContextGlobal()

  // function handleClick(){
  //   dispatchFavs({type: 'REMOVE_ALL', payload:[]})
  //   setFavsInStorage(stateFavs)
  // }

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs?.map(item => <Card key={item.id}id={item.id} name={item.name} username={item.username}/>)}
      </div>
      {/* <button onClick={handleClick}>Reset</button> */}
    </>
  );
};

export default Favs;
