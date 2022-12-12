import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { DetailsCard } from '../Components/DetailsCard'
import { useContextGlobal } from '../Components/utils/Context'
import styles from "../Sass/Detail.module.scss"



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [info, setInfo] = useState({})
  const { id } = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  const {isDarkMode} = useContextGlobal()

  useEffect(() => {
    axios(url)
    .then(res => setInfo(res))
  }, [url])

  return (
    <div className={`${styles.detail} ${isDarkMode? styles.dark : styles.light}`}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <DetailsCard info={info.data}/>
    </div>
  )
}

export default Detail