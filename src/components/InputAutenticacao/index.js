import React, { useState } from 'react';
import './InputAutenticacao.css';

function InputAutenticacao(props) {

  const placeholderText = `${props.placeholder}...` 


  const [value, setValue] = useState();

  const onTyping = (event) => {
    props.onTyping(event.target.value)
  }

  return(
    <div className="input-field">
      <label>{props.label}</label>      
      <input value={props.value} onChange={onTyping} required={props.required} placeholder={placeholderText}/>
    </div>
  )


}

export default InputAutenticacao;