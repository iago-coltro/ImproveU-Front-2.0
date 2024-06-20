import {React, useState} from 'react'
import styles from './Authentication.module.css'
import AuthenticationForm from '../../components/AuthenticationForm'

function Authentication({ page }) {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, SetConfirmPassword] = useState('')
  const [email, setEmail] = useState('')

  const url = page ?? 'login'
  const children = page ?? 'Redfinir sua senha'

  return (
    <section className={styles.authenticationForm}>
      <img className="img-login" src="./login.png" alt="imagem-tela-login"></img>
      <AuthenticationForm
        url={'xxxx/xxxxx/xxxx'}
        childrem={'Redfinir sua senha'}
      />
    </section>
  )
}

export default Authentication
