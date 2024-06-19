import React, { useState } from 'react';
import './AuthenticationForm.css';
import Input from '../InputAutenticacao'

function AuthenticationForm() {

  const onTypingUser = (event) => {
    event.preventDefault();
    console.log('Submetido'); //lógica
  }

  const [user, setUser] = useState('');
  const [password, setPassword] = useState(';')

  return (
    <div className=".authentication-form">
      <form>

        <Input label="Usuário" value="" onTypingUser={setUser}/>
        <Input label="Senha" onTypingPassword={setPassword}/>

          
      
    


        <button className="button-login">Login</button>
      </form>
    </div>
  );
}

{/* <div className="input-field">
      <label>{props.label}</label>      
      <input value={props.value} onChange={onTyping} required={props.required} placeholder={placeholderText}/>
    </div> */}
export default AuthenticationForm;