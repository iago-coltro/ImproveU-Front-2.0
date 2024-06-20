import React, { useState } from 'react';
import './InputAuthentication.css';

export default function InputAuthentication(props) {

  const placeholderText = `${props.placeholder}...` 


  const [value, setValue] = useState();

  const onTyping = (event) => {
    props.onTyping(event.target.value)
  }

  const inputType = props.type ?? 'text';
  const inputRequired = props.required ?? false;

  return(
    <div className={"input-field"}>
      <label>{props.label}</label>      
      <input id="teste" value={props?.value} type={ inputType} onChange={onTyping} required={inputRequired} placeholder={placeholderText} />
    </div>
  )
}