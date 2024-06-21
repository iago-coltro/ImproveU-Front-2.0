import styles from './AuthContainer.module.css';
import LoginForm from '../../Auth/LoginForm/LoginForm'

function AuthContainer({children}, props){
  
  return (
    <section className={styles.container}>      
      
        {/* <h1>{props.titulo ?? "Faça o login em sua conta"}</h1> */}
        {children ?? <LoginForm />}
      
    </section>
  )
}


export default AuthContainer;