import styles from './Main.module.scss';
import Title from '../../common/Title/Title';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const icon = <FontAwesomeIcon icon={faFlagCheckered} />;

const Main = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <Title />
        </div>
        <div className={styles.start}>
          <Link to='/login'>
            <Button name='Let start' icon={icon}/>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Main;