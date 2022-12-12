
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/Context'
import styles from '../Sass/Home.module.scss'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {data, isDarkMode} = useContextGlobal()
  
  return (
    <main className={`${styles.home} ${isDarkMode? styles.dark : styles.light}`}>
      <h1 className={styles.title}>Home</h1>
      <div className={styles.container}>
        {data?.map((item) => (
          <Card key={item.id} name={item.name} username={item.username} id={item.id}/>        )
        )}     
      </div>
    </main>
  )
}

export default Home