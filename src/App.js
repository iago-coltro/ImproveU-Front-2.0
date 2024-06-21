import React, { useState } from 'react';
import './App.css'

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envie os dados de login para o servidor
    console.log(`Email: ${email}, Senha: ${senha}`);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={handleSenhaChange}
        />

        <button type="submit">Login</button>

        <p>Redefinir senha?</p>
        <p>Não tem conta? Registre-se</p>
      </form>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <img src="/caminhada.jpg" alt="Homem correndo" />
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Banner />
      <Login />
    </div>
  );
};

export default App;