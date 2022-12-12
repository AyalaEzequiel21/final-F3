import { Link } from "react-router-dom"
import { useContextGlobal } from "./utils/Context"
import styles from "../Sass/Components/NavBar.module.scss"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {isDarkMode, providerState} = useContextGlobal()
  const changeTheme = ()=> {
    if(isDarkMode){
      providerState.setLightTheme()
    }else {
      providerState.setDarkTheme()
    }
  }
  return (
    <nav className={`${styles.nav} ${isDarkMode? styles.dark : styles.light}`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link className={styles.item} to={"/"}>Home</Link>
      <Link className={styles.item} to={"/contact"}>Contacto</Link>
      <Link className={styles.item} to={"/destacados"}>Destacados</Link>
      <button onClick={changeTheme}>{isDarkMode ? "☀" : "🌙"}{" "}</button>
    </nav>
  )
}

export default Navbar