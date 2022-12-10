import { useState } from "react";
import styles from "../Sass/Components/Form.module.scss"


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [message, setMessage] = useState('')

  const [info, setInfo] = useState({
    name: "",
    email: ""
  })

  const regEx = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

  const messages = {
    response: `Gracias ${info.name}, te contactaremos cuando antes vía mail`,
    error: "Por favor verifique su información nuevamente"
  } 

  function handleChange(e){
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }

  function validator(info){
    const name = info.name.length > 5
    const email = regEx.test(info.email)
    return name & email 
  }

  function handleSubmit(e){
    e.preventDefault()
    if(validator(info)){
      setMessage(messages.response)
      console.log(info);
      e.target.reset()
    }else {
      setMessage(messages.error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>Nombre</label>
          <input type="text" name="name" onChange={handleChange} required/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required/>
        </div>
        <button>Enviar</button>
        <p>{message}</p>
      </form>
    </>
  );
};

export default Form;
