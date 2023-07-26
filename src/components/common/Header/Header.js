import ButtonSmall from '../ButtonSmall/ButtonSmall';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Car sharing</p>
      </div>
      <div className={styles.logaut}>
        <ButtonSmall name='Log out' variant='white' />
      </div>
    </div>
  )
}

export default Header;