import React, { useState } from 'react'
import styles from './LoginForm.module.css'
import Input from '../InputAuth/InputAuth'
import AuthLink from 'components/Auth/LoginLink/LoginLink'

// function LoginForm(props) {
//   //TODO: FAZER O IF PARA OCULTAR O CONFIRM PASSWORD EM CASO DE FORM DE LOGIN E DEIXAR VISÍVEL EM CASOS DE NOVOS USUÁRIOS

//   const onTypingUser = event => {
//     event.preventDefault()
//     console.log('Submetido') //lógica
//   }

//   const [user, setUser] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, SetConfirmPassword] = useState('')

//   const url = '',
//     action = ''

//   return (
//     <form className={styles.form}>
//       <Input label="Usuário" value="" onTypingUser={setUser} />

//       <Input label="Senha" type={'password'} onTypingPassword={setPassword} />
//       {/* <Input
//           label="Confirmar senha"
//           type={'password'}
//           onTypingPassword={setPassword}
//         /> */}

//       <button>Login</button>

//       <AuthLink url={url} children={action} />
//       <AuthLink url={url} children={action} />
//     </form>
//   )
// }

// export default LoginForm

// import React from 'react';
import FormContainer from '../../FormContainer/FormContainer';

const LoginForm = () => {
  
  return (
    <FormContainer
      title="Faça o login em sua conta"
      buttonText="Login"
      footerText="Não tem conta? Registre-se"
    >
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Senha" />
      <div style={{ textAlign: 'right' }}>
        <a href="#" style={{ textDecoration: 'none', color: '#4CAF50' }}>
          Redefinir senha ?
        </a>
      </div>
    </FormContainer>
  );
};

export default LoginForm