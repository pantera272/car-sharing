import styles from './Button.module.scss';

const Button = ({name, icon, action}) => {

  return (
    <button className={styles.button} onClick={action}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{name}</span>
    </button>
  )
}

export default Button