import { useNavigate } from 'react-router-dom';
import ButtonSmall from '../ButtonSmall/ButtonSmall';
import styles from './Header.module.scss';

const Header = () => {

  const navigate = useNavigate();
  const isLoged = localStorage.getItem('usercarsharing');

  console.log(isLoged);

  const logOutRedirect = () => {
    navigate('/logout');
  }

  if (isLoged !== null){
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <p>Car sharing</p>
        </div>
        <div className={styles.logaut}>
          <ButtonSmall name='Log out' variant='white' action={logOutRedirect} />
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <p>Car sharing</p>
        </div>
      </div>
    )
  }
}

export default Header;