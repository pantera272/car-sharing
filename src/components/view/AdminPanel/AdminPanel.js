import ButtonSelect from '../../common/ButtonSelect/ButtonSelect';
import Header from '../../common/Header/Header';
import styles from './AdminPanel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {

  const icon = <FontAwesomeIcon icon={faPerson} />;
  const navigate = useNavigate();

  const workersPanelRedirect = () => {
    navigate('/workeradminpanel');
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.buttonGroup}>
        <ButtonSelect name='Workers' icon={icon} action={workersPanelRedirect} />
      </div>
    </div>
  )
}

export default AdminPanel;