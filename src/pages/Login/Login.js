import { React, useState } from 'react'
import styles from './Login.module.css'
import loginImage from './login.png'
import FormContainer from '../../components/FormContainer/FormContainer'
import { autenticar } from '../../services/AuthService';

const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await autenticar(email, senha); // Use "senha" aqui
      console.log('Handle successful authentication:', userData);
      // Armazene o token JWT no armazenamento local
      
      // Prossiga com a lógica de sucesso do login
    } catch (error) {
      console.error('Login failed:', error);
      // Trate a falha no login
    }
  };

  return (
    <div className={styles.container}>
      <img src={loginImage} alt="atleta correndo"></img>
      <section className="form">
        <FormContainer
          
          title="Faça o login em sua conta"
          buttonText="Login"
          footerText="Não tem conta? Registre-se"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Digite seu e-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={e => setPassword(e.target.value)}
          />
          {/* <div style={{ textAlign: 'right' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#4CAF50' }}>
              Redefinir senha ?
            </a>
          </div> */}
          <button
            style={{
              background: 'none',
              color: '#4CAF50',
              border: 'none',
              padding: '0',
              font: 'inherit',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
            onClick={() => {
              /* handle reset password logic here */
            }}
          >
            Redefinir senha ?
          </button>
        </FormContainer>
      </section>
    </div>
  )
}

export default Login
