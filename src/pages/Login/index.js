import React from 'react';
import './Login.css';
import InputAutenticacao from '../../components/InputAutenticacao';

function Login(props) {

  // return (
  //     <div className="login">
  //       <form>
  //         <div className="input-field">
  //           <label>Usuário</label>
  //           <input type="text" />
  //         </div>
  //         <div className="input-field">
  //           <label>Senha</label>
  //           <input type="password" />
  //         </div>
  //         <button className="button-login">Login</button>
  //       </form>
  //     </div>
  // );

  return (
    <InputAutenticacao />
  )
}

export default Login;