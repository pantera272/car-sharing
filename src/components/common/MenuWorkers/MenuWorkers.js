import ButtonSmall from '../ButtonSmall/ButtonSmall';
import styles from './MenuWorkers.module.scss';

const MenuWorkers = () => {
  return (
    <div className={styles.container}>
      <ButtonSmall name='Add Worker'  variant='blue' />
    </div>
  )
}

export default MenuWorkers;