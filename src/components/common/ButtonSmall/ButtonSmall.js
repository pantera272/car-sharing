import styles from './ButtonSmall.module.scss';
import clsx from 'clsx';

const ButtonSmall = ({ name, variant, action }) => {

  let white = false;
  let blue = false;

  variant === 'white' ? white = true : white = false;
  variant === 'blue' ? blue = true : blue = false;

  return (
    <button className={clsx(styles.buttonSmall, white && styles.variantWhite, blue && styles.variantBlue)} onClick={action}>{name}</button>
  )
}

export default ButtonSmall;