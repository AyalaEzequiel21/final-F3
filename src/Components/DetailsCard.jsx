import img from "../images/doctor.jpg"
import styles from "../Sass/Components/DetailsCard.module.scss"

export const DetailsCard = ({info}) => {
    console.log(info)
  return (
    info && <div className={styles.detailsCard}>
        <img src={img} alt="img" width="50px" height={"50px"}/>
        <h4>Dr/a {info.name}</h4>
        <p>Email: {info.email}</p>
        <p>Telefono: {info.phone}</p>
        <p>Sitio web: <span>{info.website}</span></p>
    </div> || <div></div>
  )
}
