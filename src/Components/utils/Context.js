import axios from "axios";
import { createContext, useContext, useState, useEffect, useReducer, useMemo } from "react";
import { SwitchTheme, favsReducer, initialFavsState, initialState } from "./Reducer";
import { getFavsFromStorage, setFavsInStorage} from "./LocalStorage"

const urlApi = 'https://jsonplaceholder.typicode.com/users'

function init(){
  let localData = getFavsFromStorage()
  return localData? localData : initialFavsState
}

const ContextGlobal = createContext(undefined);

const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [data, setData] = useState([])
  const [state, dispatch] = useReducer(SwitchTheme, initialState)
  let isDarkMode = state.theme === "dark" || false;
  const [stateFavs, dispatchFavs] = useReducer(favsReducer, initialFavsState, init)
  
  useEffect(() => {
    axios(urlApi)
    .then(res => setData(res.data))
  }, [state])

  useEffect(()=> {
    setFavsInStorage(stateFavs)
    
  }, [stateFavs])

  const providerState = useMemo(
    () => ({
      theme: state.theme,
      setDarkTheme: () => {
        dispatch({type:'DARK'})
      },
      setLightTheme: () => {
        dispatch({type:'LIGHT'})
      },
    }),
    [state.theme]
  );

  return (
    <ContextGlobal.Provider value={{
      data, 
      state, 
      isDarkMode, 
      providerState,
      stateFavs,
      dispatchFavs
      }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context

export const useContextGlobal = () => {
  return useContext(ContextGlobal)
}
