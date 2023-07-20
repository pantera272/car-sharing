import styles from './Thumbnaill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Thumbnaill = () => {
  return (
    <div className={styles.thumbnaill}>
      <FontAwesomeIcon icon={faUser} className={styles.icon} />
    </div>
  )
}

export default Thumbnaill;