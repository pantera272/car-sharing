import styles from './Login.module.scss';
import Thumbnaill from '../../common/Thumbnaill/Thumbnaill';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

  const icon = <FontAwesomeIcon icon={faRightFromBracket} />;

  return (
  <div className={styles.container}>
    <div className={styles.form}>
      <p>Account Login</p>
      <div className={styles.thumbnail}>
        <Thumbnaill />
      </div>
      <div className={styles.inputText}>
        <Input type='text' name='Login'/>
        <Input type='password' name='Password'/>
      </div> 
      <div className={styles.buttonHolder}>
        <Button name='Login' icon={icon} />
      </div>
    </div> 
  </div>
  )
}

export default Login;