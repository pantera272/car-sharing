import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './LogOutController.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import Button from "../../common/Button/Button";

const LogOutController = () => {

  const navigate = useNavigate();
  const icon = <FontAwesomeIcon icon={faFlagCheckered}/>
  
  const logOut = () => {
    localStorage.clear();
  }

  const redirectLogIn = () => {
    navigate('/login');
  }

  useEffect(() => {
    logOut();
    navigate('/logout');
  },[]);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faMugHot}/>
        <div className={styles.text}>
          <p>Coffee</p>
        <p>break!</p>
        </div>
      </div>
      <div className={styles.button}>
        <Button name='Login' icon={icon} action={redirectLogIn}/>
      </div>  
    </div>
  )
}

export default LogOutController;