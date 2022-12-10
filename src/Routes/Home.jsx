import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/Context'
import styles from '../Sass/Home.module.scss'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {data, isDark} = useContextGlobal()
  // console.log(data);
  return (
    <main className={isDark? styles.bgDark : styles.bgLight} >
      <h1>Home</h1>
      <div className='card-grid'>
        {data?.map((item) => (
          <Card key={item.id} name={item.name} username={item.username} id={item.id}/>        )
        )}     
      </div>
    </main>
  )
}

export default Home