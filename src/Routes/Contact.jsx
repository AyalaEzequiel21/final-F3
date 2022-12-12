import styles from '../Sass/Contac.module.scss'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const {isDarkMode} = useContextGlobal()

  return (
    <div className={`${styles.contact} ${isDarkMode? styles.dark : styles.light}`}>
      <h1>Want to know more?</h1>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact