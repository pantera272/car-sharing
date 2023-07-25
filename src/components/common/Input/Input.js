import { useState } from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';

const Input = ({type, name, onChange}) => {

  const [style, setStyle] = useState(false);

  const addValue = (input) => {
    input === '' ? setStyle(false) : setStyle(true);
    onChange(input);
  }

  return (
    <div className={styles.inputContainer}>
      <input type={type}  onChange={(e) => addValue(e.target.value)} className={clsx(styles.inputText, style && styles.hasFocus)}/>
      <span className={styles.focusInput} data-placeholder={name}></span>
    </div>    
  )
}

export default Input;