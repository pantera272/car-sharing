import styles from './ButtonSelect.module.scss';

const ButtonSelect = ({name, icon, action}) => {
  return (
    <button className={styles.button} onClick={action}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.name}>{name}</span>
    </button>
  )
}

export default ButtonSelect;