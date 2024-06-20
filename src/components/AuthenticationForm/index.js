import React, { useState } from 'react'
import './AuthenticationForm.css'
import Input from '../InputAuthentication'
import AuthenticationLink from 'components/AuthenticationLink'

function AuthenticationForm(props) {
  //TODO: FAZER O IF PARA OCULTAR O CONFIRM PASSWORD EM CASO DE FORM DE LOGIN E DEIXAR VISÍVEL EM CASOS DE NOVOS USUÁRIOS

  const onTypingUser = event => {
    event.preventDefault()
    console.log('Submetido') //lógica
  }

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, SetConfirmPassword] = useState('')


  const url = "", action = "";

  return (
    <div className="authentication-form">
      <form className="form-container">
        <h1>{props.titulo ?? "Faça o login em sua conta"}</h1>
        <Input label="Usuário" value="" onTypingUser={setUser} />
        <Input label="Senha" type={'password'} onTypingPassword={setPassword} />
        <Input
          label="Confirmar senha"
          type={'password'}
          onTypingPassword={setPassword}
        />
        <button className="button-login">Login</button>
        <AuthenticationLink url={url} children={action}/>
        <AuthenticationLink  url={url} children={action}/>
      </form>
    </div>
  )
}

export default AuthenticationForm
