import { useSelector } from 'react-redux';
import styles from './SharingPage.module.scss';


const SharingPage = () => {

  const data = useSelector(state => state.workers);
  console.log(data);

  return(
    <div className={styles.container}>
      sharing
    </div>
  )
}

export default SharingPage;