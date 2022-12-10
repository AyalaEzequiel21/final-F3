import { Link } from "react-router-dom"
import { useContextGlobal } from "./utils/Context"
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
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contacto</Link>
      <Link to={"/destacados"}>Destacados</Link>
      <button onClick={changeTheme}>{isDarkMode ? "☀" : "🌙"}{" "}</button>
    </nav>
  )
}

export default Navbar