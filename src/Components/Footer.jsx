import img from '../images/DH.png'
import { useContextGlobal } from './utils/Context'
import styles from '../Sass/Components/Footer.module.scss'

const Footer = () => {

  const {isDarkMode} = useContextGlobal()

  return (
    <footer className={`${styles.footer} ${isDarkMode? styles.dark : styles.light}`}>
        <p>Powered by</p>
        <img src={img} alt='DH-logo' />
    </footer>
  )
}

export default Footer
