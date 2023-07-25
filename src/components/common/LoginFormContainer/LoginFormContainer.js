import styles from './LoginFormContainer.module.scss';
import Thumbnaill from '../Thumbnaill/Thumbnaill';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const LoginFormContainer = ({autentication}) => {

  const icon = <FontAwesomeIcon icon={faRightFromBracket} />;

  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => {
    autentication(user, password);
  }

  return (
  <div className={styles.container}>
    <div className={styles.form}>
      <p>Account Login</p>
      <div className={styles.thumbnail}>
        <Thumbnaill />
      </div>
      <div className={styles.inputText}>
        <Input type='text' name='Login' onChange={setUser} />
        <Input type='password' name='Password' onChange={setPassword} />
      </div> 
      <div className={styles.buttonHolder}>
        <Button name='Login' icon={icon} action={handleClick}/>
      </div>
    </div> 
  </div>
  )
}

export default LoginFormContainer;