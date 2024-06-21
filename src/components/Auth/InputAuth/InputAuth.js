import React, { useState } from 'react';
import styles from './InputAuth.module.css';

export default function InputAuth(props) {

  const placeholderText = `${props.placeholder}...` 

  const [value, setValue] = useState();

  const onTyping = (event) => {
    props.onTyping(event.target.value)
  }

  const inputType = props.type ?? 'text';
  const inputRequired = props.required ?? false;

  return(
    <div className={styles.container}>
      <label>{props.label}      
        <input value={props?.value} type={ inputType} onChange={onTyping} required={inputRequired} placeholder={placeholderText} />
      </label>
    </div>
  )
}